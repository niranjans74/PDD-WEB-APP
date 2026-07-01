const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');
const AdmZip = require('adm-zip');

const jreUrl = 'https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.10%2B7/OpenJDK17U-jre_x64_windows_hotspot_17.0.10_7.zip';
const signerUrl = 'https://github.com/patrickfav/uber-apk-signer/releases/download/v1.3.0/uber-apk-signer-1.3.0.jar';

const toolsDir = path.join(__dirname, 'apk-tools');
const jreZipPath = path.join(toolsDir, 'jre.zip');
const signerJarPath = path.join(toolsDir, 'uber-apk-signer.jar');
const jreExtractedPath = path.join(toolsDir, 'jdk-17.0.10+7-jre');
const javaExe = path.join(jreExtractedPath, 'bin', 'java.exe');

const targetApk = path.join(__dirname, 'PlacementPro-Latest.apk');

if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir);
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            return resolve();
        }
        console.log(`Downloading ${path.basename(dest)}...`);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function signApk() {
    try {
        console.log("Removing broken META-INF from APK...");
        const zip = new AdmZip(targetApk);
        const entries = zip.getEntries();
        let modified = false;
        entries.forEach(entry => {
            if (entry.entryName.startsWith('META-INF/')) {
                zip.deleteFile(entry);
                modified = true;
            }
        });
        if (modified) {
            zip.writeZip(targetApk);
            console.log("Cleaned APK.");
        }

        await downloadFile(signerUrl, signerJarPath);
        
        if (!fs.existsSync(javaExe)) {
            await downloadFile(jreUrl, jreZipPath);
            console.log("Extracting JRE...");
            const jreZip = new AdmZip(jreZipPath);
            jreZip.extractAllTo(toolsDir, true);
        }

        console.log("Signing APK using portable JRE...");
        const cmd = `"${javaExe}" -jar "${signerJarPath}" -a "${targetApk}" --overwrite`;
        console.log("Running:", cmd);
        execSync(cmd, { stdio: 'inherit' });
        
        console.log("Success! PlacementPro-Latest.apk has a valid signature now.");
    } catch (e) {
        console.error("Error signing APK:", e);
    }
}

signApk();

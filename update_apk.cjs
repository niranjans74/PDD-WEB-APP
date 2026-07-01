const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const baseApkPath = path.join(__dirname, 'PlacementPro-Latest.apk');
const distPath = path.join(__dirname, 'dist');
const newApkPath = path.join(__dirname, 'PlacementPro-Latest.apk');

if (!fs.existsSync(baseApkPath)) {
    console.error("Base APK not found at: " + baseApkPath);
    process.exit(1);
}

try {
    const zip = new AdmZip(baseApkPath);

    function addLocalFolderToZip(localPath, zipPath) {
        const files = fs.readdirSync(localPath);
        for (const file of files) {
            const fullPath = path.join(localPath, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                addLocalFolderToZip(fullPath, zipPath + file + '/');
            } else {
                const content = fs.readFileSync(fullPath);
                zip.addFile(zipPath + file, content);
            }
        }
    }

    console.log("Updating APK with new web assets...");
    
    // Remove existing assets/public files
    const zipEntries = zip.getEntries();
    zipEntries.forEach(entry => {
        if (entry.entryName.startsWith('assets/public/')) {
            zip.deleteFile(entry);
        }
    });

    // Add new built files
    addLocalFolderToZip(distPath, 'assets/public/');

    zip.writeZip(newApkPath);
    console.log("APK successfully updated with the latest content!");
} catch (e) {
    console.error("Error modifying APK: ", e);
}

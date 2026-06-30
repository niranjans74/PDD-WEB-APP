const mongoose = require('mongoose');

const uri = "mongodb://niranjanniranjan0047_db_user:KnhWFVHHDH9dF9Wc@ac-crvlod7-shard-00-00.cuinw85.mongodb.net:27017,ac-crvlod7-shard-00-01.cuinw85.mongodb.net:27017,ac-crvlod7-shard-00-02.cuinw85.mongodb.net:27017/placementcompanion?ssl=true&replicaSet=atlas-qwsvam-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

async function test() {
  try {
    await mongoose.connect(uri);
    console.log("SUCCESS! Connected to MongoDB directly.");
    process.exit(0);
  } catch (err) {
    console.log("FAIL!", err.message);
    process.exit(1);
  }
}

test();

require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const restoreAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // First try the email from the screenshots
    let user = await User.findOneAndUpdate(
      { email: "niranjanniranjan0047@gmail.com" },
      { role: "admin" },
      { new: true }
    );

    if (user) {
      console.log(`Successfully restored admin privileges for: ${user.email}`);
    } else {
      console.log("Could not find 'niranjanniranjan0047@gmail.com'. Promoting the first user found in DB to admin as a fallback.");
      user = await User.findOneAndUpdate({}, { role: "admin" }, { new: true });
      if (user) {
         console.log(`Successfully restored admin privileges for: ${user.email}`);
      } else {
         console.log("No users found in database!");
      }
    }
    
    process.exit(0);
  } catch (error) {
    console.error("Error restoring admin:", error);
    process.exit(1);
  }
};

restoreAdmin();

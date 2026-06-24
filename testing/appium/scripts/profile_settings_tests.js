/**
 * Appium Test Scripts - Profile and Settings
 * Module: Profile Management | Settings
 * Count: 35 test cases
 */

module.exports = {
  tests: [
    {
      id: "TC_APP_PRO_001",
      module: "Profile Management",
      scenario: "Navigate to profile screen from dashboard",
      steps: "1. Login. 2. Tap on profile icon or tab",
      expected: "Profile screen should load successfully"
    },
    {
      id: "TC_APP_PRO_002",
      module: "Profile Management",
      scenario: "Verify UI elements on profile screen",
      steps: "1. Navigate to Profile",
      expected: "Name, email, avatar, edit button should be visible"
    },
    {
      id: "TC_APP_PRO_003",
      module: "Profile Management",
      scenario: "Edit profile - valid data",
      steps: "1. Tap Edit. 2. Update name and phone. 3. Save",
      expected: "Profile should update and show success message"
    },
    {
      id: "TC_APP_PRO_004",
      module: "Profile Management",
      scenario: "Edit profile - invalid phone number",
      steps: "1. Tap Edit. 2. Enter invalid phone. 3. Save",
      expected: "Error message 'Invalid phone number format'"
    },
    {
      id: "TC_APP_PRO_005",
      module: "Profile Management",
      scenario: "Edit profile - empty name",
      steps: "1. Tap Edit. 2. Clear name field. 3. Save",
      expected: "Error message 'Name is required'"
    },
    {
      id: "TC_APP_PRO_006",
      module: "Profile Management",
      scenario: "Cancel profile edit",
      steps: "1. Tap Edit. 2. Change name. 3. Tap Cancel",
      expected: "Changes should be discarded, profile remains unchanged"
    },
    {
      id: "TC_APP_PRO_007",
      module: "Profile Management",
      scenario: "Upload profile picture - gallery",
      steps: "1. Tap avatar. 2. Choose from gallery. 3. Select image",
      expected: "Profile picture should update"
    },
    {
      id: "TC_APP_PRO_008",
      module: "Profile Management",
      scenario: "Upload profile picture - camera",
      steps: "1. Tap avatar. 2. Take photo. 3. Capture and accept",
      expected: "Profile picture should update"
    },
    {
      id: "TC_APP_PRO_009",
      module: "Profile Management",
      scenario: "Upload profile picture - size limit",
      steps: "1. Tap avatar. 2. Select image > 5MB",
      expected: "Error message 'Image size exceeds 5MB limit'"
    },
    {
      id: "TC_APP_PRO_010",
      module: "Profile Management",
      scenario: "Remove profile picture",
      steps: "1. Tap avatar. 2. Select Remove photo",
      expected: "Avatar should revert to default placeholder"
    },
    {
      id: "TC_APP_PRO_011",
      module: "Profile Management",
      scenario: "Change password - successful",
      steps: "1. Tap Change Password. 2. Enter current, new, confirm. 3. Save",
      expected: "Password changes successfully, success message shown"
    },
    {
      id: "TC_APP_PRO_012",
      module: "Profile Management",
      scenario: "Change password - incorrect current password",
      steps: "1. Tap Change Password. 2. Enter wrong current password. 3. Save",
      expected: "Error 'Incorrect current password'"
    },
    {
      id: "TC_APP_PRO_013",
      module: "Profile Management",
      scenario: "Change password - mismatch",
      steps: "1. Tap Change Password. 2. New and confirm passwords differ",
      expected: "Error 'Passwords do not match'"
    },
    {
      id: "TC_APP_PRO_014",
      module: "Profile Management",
      scenario: "Change password - weak password",
      steps: "1. Tap Change Password. 2. Enter weak new password (e.g., '123')",
      expected: "Error 'Password too weak'"
    },
    {
      id: "TC_APP_PRO_015",
      module: "Profile Management",
      scenario: "Update academic details",
      steps: "1. Navigate to Academic Section. 2. Update CGPA. 3. Save",
      expected: "Academic details updated successfully"
    },
    {
      id: "TC_APP_PRO_016",
      module: "Profile Management",
      scenario: "Update skills",
      steps: "1. Navigate to Skills section. 2. Add new skill. 3. Save",
      expected: "New skill added to profile"
    },
    {
      id: "TC_APP_PRO_017",
      module: "Profile Management",
      scenario: "Remove skill",
      steps: "1. Navigate to Skills section. 2. Tap delete icon on skill",
      expected: "Skill removed from profile"
    },
    {
      id: "TC_APP_PRO_018",
      module: "Profile Management",
      scenario: "Upload resume - PDF",
      steps: "1. Tap Upload Resume. 2. Select PDF file",
      expected: "Resume uploaded successfully"
    },
    {
      id: "TC_APP_PRO_019",
      module: "Profile Management",
      scenario: "Upload resume - invalid format",
      steps: "1. Tap Upload Resume. 2. Select image file",
      expected: "Error 'Only PDF/DOCX formats allowed'"
    },
    {
      id: "TC_APP_PRO_020",
      module: "Profile Management",
      scenario: "Delete resume",
      steps: "1. Tap delete icon next to resume",
      expected: "Resume deleted, prompt to upload new one"
    },
    {
      id: "TC_APP_SET_001",
      module: "Settings",
      scenario: "Navigate to Settings",
      steps: "1. Go to Profile. 2. Tap Settings gear icon",
      expected: "Settings screen loaded"
    },
    {
      id: "TC_APP_SET_002",
      module: "Settings",
      scenario: "Toggle push notifications",
      steps: "1. In Settings, toggle Push Notifications",
      expected: "Toggle state changes and saves"
    },
    {
      id: "TC_APP_SET_003",
      module: "Settings",
      scenario: "Toggle email notifications",
      steps: "1. In Settings, toggle Email Notifications",
      expected: "Toggle state changes and saves"
    },
    {
      id: "TC_APP_SET_004",
      module: "Settings",
      scenario: "Change theme - Dark Mode",
      steps: "1. In Settings, select Theme -> Dark Mode",
      expected: "App theme immediately changes to dark"
    },
    {
      id: "TC_APP_SET_005",
      module: "Settings",
      scenario: "Change theme - Light Mode",
      steps: "1. In Settings, select Theme -> Light Mode",
      expected: "App theme immediately changes to light"
    },
    {
      id: "TC_APP_SET_006",
      module: "Settings",
      scenario: "Change theme - System Default",
      steps: "1. In Settings, select Theme -> System Default",
      expected: "App theme matches system theme"
    },
    {
      id: "TC_APP_SET_007",
      module: "Settings",
      scenario: "Clear app cache",
      steps: "1. In Settings, tap Clear Cache. 2. Confirm",
      expected: "Success message 'Cache cleared'"
    },
    {
      id: "TC_APP_SET_008",
      module: "Settings",
      scenario: "View Privacy Policy",
      steps: "1. In Settings, tap Privacy Policy",
      expected: "Privacy policy webview or screen opens"
    },
    {
      id: "TC_APP_SET_009",
      module: "Settings",
      scenario: "View Terms of Service",
      steps: "1. In Settings, tap Terms of Service",
      expected: "Terms of service webview or screen opens"
    },
    {
      id: "TC_APP_SET_010",
      module: "Settings",
      scenario: "About App section",
      steps: "1. In Settings, tap About",
      expected: "App version and developer info displayed"
    },
    {
      id: "TC_APP_SET_011",
      module: "Settings",
      scenario: "Check for updates",
      steps: "1. In About, tap Check for Updates",
      expected: "Shows 'App is up to date' or update prompt"
    },
    {
      id: "TC_APP_SET_012",
      module: "Settings",
      scenario: "Contact Support",
      steps: "1. In Settings, tap Contact Support. 2. Fill form. 3. Send",
      expected: "Support request sent successfully"
    },
    {
      id: "TC_APP_SET_013",
      module: "Settings",
      scenario: "Delete Account request",
      steps: "1. In Settings, tap Delete Account. 2. Confirm",
      expected: "Warning prompt appears"
    },
    {
      id: "TC_APP_SET_014",
      module: "Settings",
      scenario: "Cancel Delete Account",
      steps: "1. Tap Delete Account. 2. Tap Cancel on prompt",
      expected: "Dialog closes, account not deleted"
    },
    {
      id: "TC_APP_SET_015",
      module: "Settings",
      scenario: "Logout from Settings",
      steps: "1. Scroll to bottom of Settings. 2. Tap Logout. 3. Confirm",
      expected: "User logged out, routed to login screen"
    }
  ]
};

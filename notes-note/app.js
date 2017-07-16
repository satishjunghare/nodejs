console.log("Starting app.");

// Lost file system module
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);

// Append value to the file
fs.appendFile('greetings.txt', 'Hello '+user.username+'!');
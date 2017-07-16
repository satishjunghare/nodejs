console.log('Starting app.js');

// load os module and log user details
const os = require('os');
var user = os.userInfo();
console.log(user);

// load our own module
const notes = require('./notes.js');
console.log('Result: '+ notes.add(5, 2));
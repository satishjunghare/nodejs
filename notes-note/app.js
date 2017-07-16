console.log('Starting app.js');

// load os module and log user details
const _ = require('lodash');
const os = require('os');
var user = os.userInfo();
console.log(user);

/////////////// Own Module ///////////////////////
// load our own module
const notes = require('./notes.js');
console.log('Result: '+ notes.add(5, 2));

/////////////// Lodash Example ///////////////////

console.log(_.isString(true)); // It will return false is a boolean value
console.log(_.isString('Satish')); // It will reurn true because value is a string.

var filteredArray = _.uniq(['Satish', 'Satish', 1, 'Andrew', 2, 4, 3, 2]);
console.log(filteredArray);
// Output : [ 'Satish', 1, 'Andrew', 2, 4, 3 ]
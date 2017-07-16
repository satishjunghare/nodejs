# Node Js - Use require()
We use requre() to load node api's like os, fs, http etc, and third party libraries like express, underscore etc and our own modules to reuse it.

Node 'os' api module which gives you the user information of running operting system.
```
const os = require('os');
var user = os.userInfo();
console.log(user);
```
Nodejs has many api module which you can implement into you application.
https://nodejs.org/api/

I have also loaded own simple module which has function to returns the addition of two numbers.
```
const notes = require('./notes.js');
console.log('Result: '+ notes.add(5, 2));
```

We can also load third party modules like lodash, express, underscore etc.
You can simply go to https://www.npmjs.com/ and search the required packages. To install any third party packages you just need to run a simple command.
> npm install package_name

Or you can search any package before installing it.
> npm search package_name

For example, install lodash module
```
npm install lodash --save
```
"--save" into command will update your package.json file by adding package details into 'dependencies' section.
```
"dependencies": {
	"lodash": "^4.17.4"
}
```

This is how you can load any third party module into your project file.
```
const _ = require('lodash');
```

# How to run
```
node app.js
```
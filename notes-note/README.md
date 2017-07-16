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

# How to run
```
node app.js
```
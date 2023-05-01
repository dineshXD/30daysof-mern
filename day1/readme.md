What is nodejs?
Nodejs is a javascript runtime environment u can install it through nodejs.org. It is built on google's open source v8 javascript engine. Nodejs is single threaded Will explain this later.

How to execute js code in terminal?
we can execute javascript code in termianl using nodejs. e.g. node filename.js

module
In nodejs each file is module and each module has three predefined variables require,exports,module
require => is a function used to load and use the other modules in current module.
exports => used to export the module's public methods and properties.
module => js code in module is executed only one the module is first used and the module's exported object is initialized during execution.The cached exported object is then reused. it work like static keyword in java.

NPM
NPM is a package management tool installed with nodejs. which allows user to download third-party packages. users also can upload packages created by themselves. You can find more info on npmjs.org

File module -> fs
In file module there is 2 type of functions synchronous and asynchronous
1)Synchronous is also called blocking code because each code executed line by line
2)Asynchronous is non blocking code it will not wait for code to be finished.
You can see code for better understanding.

Nodejs original purpose is to write high-performance web servers so we will learn more about built in module like http
for better understanding see networking.js file

Net module can be used to create socket server or socket clients

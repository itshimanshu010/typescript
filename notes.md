It is Open Source Programming Language
By Microsoft
Typed superset of JavaScript
that complies down to plain JavaScript
TypeScript is combination of es6 es7 javascript and some other features

You can change .js extension to .ts
and it will work fine

Why

optional static typing and type inferenece
1.JS doesnot know what type a variable is until actually instanited in runtime which is too late
where as ts add type support to js as result errors are identified when you type your code

2.also specifying the type is optional in ts

3.Enhanced IDE support
4.Main

#installation
First install node
then install type script globally by
npm install -g typescript

for version check
tsc -v

for running the file
first to compile which will convet and create a transpile code file in js
that is main.ts to main js

first run the command
tsc main.ts  or  tsc main
this command creates a file main.js which contain transpiled code.
also the "let" in main.ts change into "var" in main.js

now run 
node main.js or node main
it will show the output

now in main.ts it show error on let message because
the file is treated as scriot rather than module
module has its own scope where as scipts share the global scope

Solution is we need to add exports and import statemnt by which typescript treats this file as module not a script

as node module
npm i typescript

ts configuration file
tsc --init



#Functions

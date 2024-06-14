#TypeScript Overview
Open Source Programming Language:
Developed and maintained by Microsoft.

Typed Superset of JavaScript:
TypeScript is a typed superset of JavaScript, meaning it builds on JavaScript by adding optional static types.

Compiles Down to Plain JavaScript:
TypeScript code is transpiled (compiled) into JavaScript, which can then run in any environment that supports JavaScript.

Combination of ES6, ES7, and Additional Features:
TypeScript incorporates features from ECMAScript 6 (ES6) and ECMAScript 7 (ES7), along with its own additional features like static typing.

File Extension:
You can rename a .js file to .ts, and it should work, provided that you add type annotations if necessary and resolve any type-related errors.

Why Use TypeScript?

Optional Static Typing and Type Inference:
Static Typing: TypeScript allows you to define types for variables, function parameters, and return values. This helps catch errors during development rather than at runtime.
Type Inference: TypeScript can infer the type of a variable based on the assigned value, making it optional to explicitly declare types.

Enhanced IDE Support:
TypeScript provides better code completion, navigation, and refactoring capabilities in IDEs, leading to a more efficient development process.

Early Error Detection:
By catching errors at compile time, TypeScript reduces the likelihood of runtime errors.

Improved Code Quality and Maintainability:
Static typing, along with other TypeScript features, improves code quality and makes it easier to maintain.

#Installation

Install Node.js:
Make sure you have Node.js installed on your system.

Install TypeScript Globally:
Run the command: npm install -g typescript

Check TypeScript Version:
Run the command: tsc -v

Compiling and Running TypeScript

Compile TypeScript to JavaScript:
Run the command: tsc main.ts or tsc main
This generates a main.js file containing the transpiled JavaScript code.

Run the JavaScript File:
Run the command: node main.js or node main
This will execute the compiled JavaScript code.

Understanding Scope:
In TypeScript, if a file is treated as a script rather than a module, it shares the global scope.
To treat a file as a module, use import and export statements, which provide module scope.

Example of Using Modules
// main.ts
export const message = 'Hello, TypeScript!';

// anotherFile.ts
import { message } from './main';
console.log(message);

TypeScript Configuration

Initialize TypeScript Configuration File:
Run the command: tsc --init
This creates a tsconfig.json file that allows you to configure TypeScript compiler options.

Install TypeScript Locally (as a dev dependency):
Run the command: npm install --save-dev typescript
Corrected Example of Compilation and Execution

Compile the TypeScript File:
tsc main.ts

Run the Compiled JavaScript File:
node main.js
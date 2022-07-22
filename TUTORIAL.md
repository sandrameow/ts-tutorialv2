# Learn TypeScript

TypeScript is an open-source object-oriented language developed and maintained by Microsoft, licensed under Apache 2 license. It is a typed superset of Javascript that compiles to plain JavaScript. TypeScript was developed under Anders Hejlsberg, who also led the creation of the C# language. TypeScript was first released in October 2012.

## 1. Install TypeScript and Setup Environment

> Install TypeScript using NPM

NPM (Node.js package manager) is used to install the TypeScript package on your local machine or a project. Make sure you have Node.js install on your local machine. If you are using JavaScript frameworks for your application, then it is highly recommended to install Node.js.

### 1.1 Level 1 Step 1

NPM install the "typescript" library module version.

#### HINTS

* Install the package using npm
* Run `npm install typescript`

## 2. Add work file

> To start first we schould make work file

### 2.1

> Create add.ts file

Create a new file in your code editor and name it add.ts and write the following code in it.

```js
function addNumbers(a: number, b: number) { 
    return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 
```

#### HINTS

- Create an `add.ts` file to pass this lesson.
- Copy following code in it

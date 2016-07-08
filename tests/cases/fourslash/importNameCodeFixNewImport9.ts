/// <reference path="fourslash.ts" />

//// f1/*0*/();

// @Filename: ../package.json
//// { "dependencies": { "fake-module": "latest" } }

// @Filename: ../node_modules/fake-module/notindex.d.ts
//// export var v1 = 5;
//// export function f1();

// @Filename: ../node_modules/fake-module/notindex.js
//// module.exports = {
////    v1: 5,
////    f1: function () {}
//// };

// @Filename: ../node_modules/fake-module/package.json
//// { "main":"./notindex.js", "typings":"./notindex.d.ts" }

verify.codeFixAtPosition(
`import { f1 } from "fake-module";sys.newLine f1();`
);
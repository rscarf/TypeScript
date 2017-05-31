/// <reference path='fourslash.ts'/>
// @noImplicitReferences: true

// @Filename: /node_modules/a/index.d.ts
////import /*useAX*/X from "x";
////export function a(x: X): void;

// @Filename: /node_modules/a/node_modules/x/index.d.ts
////export default class /*defAX*/X {
////    private x: number;
////}

// @Filename: /node_modules/a/node_modules/x/package.json
////{ "name": "x", "version": "1.2.3" }

// @Filename: /node_modules/b/index.d.ts
////import /*useBX*/X from "x";
////export const b: X;

// @Filename: /node_modules/b/node_modules/x/index.d.ts
////content not parsed

// @Filename: /node_modules/b/node_modules/x/package.json
////{ "name": "x", "version": "1.2.3" }

// @Filename: /src/a.ts
////import { a } from "a";
////import { b } from "b";
////a(b);

verify.noErrors();
//verify.goToDefinition("useAX", "defAX");
//verify.goToDefinition("useBX", "defAX");

//TODO: test with go to definition?

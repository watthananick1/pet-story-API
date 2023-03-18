node:internal/modules/cjs/loader:528
      throw e;
      ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in /Users/watthananick/petstory_api/node_modules/firebase/package.json
    at new NodeError (node:internal/errors:393:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:358:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:668:3)
    at resolveExports (node:internal/modules/cjs/loader:522:36)
    at Module._findPath (node:internal/modules/cjs/loader:562:31)
    at Module._resolveFilename (node:internal/modules/cjs/loader:971:27)
    at Module._load (node:internal/modules/cjs/loader:833:27)
    at Module.require (node:internal/modules/cjs/loader:1051:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/Users/watthananick/petstory_api/config.js:1:16) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}

Node.js v18.10.0
[nodemon] app crashed - waiting for file changes before starting...

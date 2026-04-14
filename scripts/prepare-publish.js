const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const publishPkg = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  main: "./index.js",
  exports: { ".": "./index.js" },
  repository: pkg.repository,
  dependencies: pkg.dependencies,
  browser: pkg.browser,
  publishConfig: pkg.publishConfig
};

fs.writeFileSync(
  path.join(__dirname, '../dist/package.json'),
  JSON.stringify(publishPkg, null, 2) + '\n'
);

console.log('Created dist/package.json for publishing');

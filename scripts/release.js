#!/usr/bin/env node

if (!process.env.IS_BUILD_AGENT) {
  console.log('Package will not be published because we\'re not running in a CI build agent');
  return process.exit(0);
}

const path = require('path');
const semver = require('semver');
const {exec} = require('child_process');
const fs = require('fs');

const packageJSONPath = path.resolve(__dirname, '..', 'package.json');
const packageJSON = require(packageJSONPath);

promisify(fs.writeFile)(
  packageJSONPath,
  JSON.stringify(Object.assign({}, packageJSON, {private: true}), null, 2)
)

  .then(() => promisify(exec)('npm view wix-style-react version --registry=https://registry.npmjs.org/'))

  .then(publishedVersion => semver.gt(packageJSON.version, publishedVersion))

  .then(shouldPublish => shouldPublish ?
    promisify(fs.writeFile)(packageJSONPath, packageJSON)
      .then(() => 'Package will be published because of a version bump in package.json') :

    'Package will not be published because this version is already published'
  )

  .then(console.log)

  .catch(error => {
    console.error('ERROR: Unable to publish', error);
    process.exit(1);
  });



// promisify : Function -> List a -> Promise
function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) =>
      fn(
        ...args,
        (err, payload) => err ? reject(err) : resolve(payload)
      )
    );
}

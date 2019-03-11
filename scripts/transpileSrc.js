/* eslint no-console: 0 */

const copy = require('copy');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const { parse } = require('@babel/parser');
const { transformFromAstAsync } = require('@babel/core');

const srcDir = path.resolve(__dirname, '../dist');
const esDir = path.resolve(__dirname, '../dist/es');
const srcToEsBabelPlugin = path.resolve(
  __dirname,
  './babel-plugin-src-to-es.js',
);

const readFileAsync = fileLoc => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileLoc, 'utf8', (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(content);
    });
  });
};

const writeFileAsync = (fileLoc, dir, code) => {
  const fullPath = path.join(dir, fileLoc);
  return new Promise((resolve, reject) => {
    mkdirp(path.parse(fullPath).dir, () => {
      fs.writeFile(fullPath, code, err => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
};

const copyAsync = (withESTransform, ...args) => {
  return new Promise((resolve, reject) => {
    copy(...args, function(err, files) {
      files.forEach(file => {
        if (withESTransform && file.dest.includes('st.css')) {
          fs.readFile(file.dest, 'utf-8', function(error, content) {
            content = content
              .replace(
                /wix-ui-backoffice\/dist\/src/g,
                'wix-ui-backoffice/dist/es/src',
              )
              .replace(/wix-ui-core\/dist\/src/g, 'wix-ui-core/dist/es/src');
            fs.writeFile(file.dest, content, function(writeErr) {
              if (writeErr) {
                console.warn(writeErr);
              }
            });
          });
        }
      });
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
};

const run = () => {
  const esCopied = copyAsync(true, './src/**/!(*.js)', './dist/es/src');
  const srcCopied = copyAsync(false, './src/**/!(*.js)', './dist/src');

  const files = glob.sync('./src/**/*.js');

  const result = Promise.all(
    files
      .map(async fileLoc => {
        const fileContent = await readFileAsync(fileLoc, 'utf8');
        const ast = parse(fileContent, {
          sourceType: 'module',
          tokens: false,
          plugins: [
            'jsx',
            'asyncGenerators',
            'classProperties',
            'decorators-legacy',
            'dynamicImport',
            'exportDefaultFrom',
            'exportNamespaceFrom',
            'objectRestSpread',
          ],
        });
        const transformedWithModules = await transformFromAstAsync(ast, null, {
          babelrc: true,
          ast: true,
          filename: fileLoc,
          plugins: [srcToEsBabelPlugin],
        });
        const writeModules = writeFileAsync(
          fileLoc,
          esDir,
          transformedWithModules.code,
        );
        const transformedES5 = await transformFromAstAsync(
          transformedWithModules.ast,
          null,
          {
            babelrc: false,
            ast: false,
            filename: fileLoc,
            plugins: [
              [srcToEsBabelPlugin, { esToSrc: true }],
              '@babel/plugin-transform-modules-commonjs',
            ],
          },
        );
        return Promise.all([
          writeModules,
          writeFileAsync(fileLoc, srcDir, transformedES5.code),
        ]);
      })
      .concat(esCopied, srcCopied),
  );
  return result;
};

module.exports = run;

const fs = require('fs');
const shell = require('child_process').execSync;

const copyFolderWithIconsToSrcForStorybookOnDisk = iconsDir => {
  shell(`mkdir -p ./src/${iconsDir}`);
  shell(`cp -r ${iconsDir}/* ./src/${iconsDir}`);
};

const createFile = (name, content, pathToFile) => fs.writeFileSync(pathToFile + name, content);

const createFolderForIconsOnDisk = iconsDir => {
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }
  if (!fs.existsSync(`${iconsDir}/system`)) {
    fs.mkdirSync(`${iconsDir}/system`);
  }
};

const writeIconsFilesToFolderOnDisk = (iconsFilesContentMap, iconsDir, prefix = '') => {
  Object.keys(iconsFilesContentMap)
    .forEach(fileName => {
      createFile(fileName, iconsFilesContentMap[fileName], `${iconsDir}/${prefix}`);
      console.log('\x1b[36m', `"${prefix}${fileName}" was created`);
      const iconName = fileName.replace('.js', '');
      const definitionFilename = `${iconName}.d.ts`;
      createFile(
        definitionFilename,
        [
          `import {${iconName}} from 'wix-ui-icons-common';`,
          `export default ${iconName};`,
        ].join('\n') + '\n',
        `${iconsDir}/${prefix}`
      );
      console.log('\x1b[36m', `"${prefix}${definitionFilename}" was created`);
    });
};

const writeIndexFileToDisk = (indexFileContent, iconsDir) => {
  createFile('index.js', indexFileContent, iconsDir + '/');
  console.log('\x1b[36m', `"index.js was created`);
};

const writeIndexDefinitionFileToDisk = (indexDefinitionFileContent, iconsDir) => {
  createFile('index.d.js', indexDefinitionFileContent, iconsDir + '/');
  console.log('\x1b[36m', `"index.d.ts was created`);
};

const readArrayOfFilesInFolderOnDisk = dirname => fs.readdirSync(dirname);

module.exports = {
  copyFolderWithIconsToSrcForStorybookOnDisk,
  createFolderForIconsOnDisk,
  writeIconsFilesToFolderOnDisk,
  writeIndexFileToDisk,
  writeIndexDefinitionFileToDisk,
  readArrayOfFilesInFolderOnDisk
};

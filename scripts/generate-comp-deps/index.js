/* eslint-disable no-console */

const fs = require('fs');
const buildComponentDeps = require('./generate');

function saveAsJson(comps, filePath) {
  fs.writeFile(filePath, JSON.stringify(comps), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`components JSON saved to : ${filePath}`);
  });
}

function prettyPrint(comps) {
  Object.values(comps).forEach(c => {
    const { filePath, depLevel, totalDependents } = c;
    console.log(
      `${filePath.replace('/index.js', '')}, ${depLevel}, ${totalDependents}`,
    );
  });
}

function convertToComps(deps) {
  const newComps = {};

  function filePathToId(filePath) {
    return filePath.replace('/index.js', '');
  }

  Object.keys(deps).forEach(filePath => {
    const comp = deps[filePath];
    const id = filePathToId(filePath);
    newComps[id] = comp;
    comp.name = id;
    comp.id = id;
    comp.deps = comp.deps.map(filePathToId);
    comp.dependents = comp.dependents.map(filePathToId);
  });

  return newComps;
}

async function generate(entry) {
  const filteredDeps = await buildComponentDeps(entry);

  const comps = convertToComps(filteredDeps);
  // prettyPrint(comps);
  // console.log('comps= ', comps);

  saveAsJson(comps, './stories/compDeps/components.json');
}

generate('src/index.js');

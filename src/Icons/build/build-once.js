const buildIcons = require('./build-icons');
const path = require('path');
const fs = require('fs');


const indexFile = path.join(__dirname, '..', 'index.js');
if (!fs.existsSync(indexFile)) {
  buildIcons();
}

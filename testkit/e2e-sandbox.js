const express = require('express');
const app = express();

if (process.argv[2] === undefined) {
  console.log('provide web server port !');
} else if (process.argv[3] === undefined) {
  console.log('provide static file directory !');
} else {

  const PORT = process.env.PORT || process.argv[2];
  const staticFiles = process.argv[3];

  app.use('/', express.static(staticFiles));

  app.listen(PORT, () => {
    console.log('e2e sandbox is running on port %s, serving %s', PORT, staticFiles);
  });
}

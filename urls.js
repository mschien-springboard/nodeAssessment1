const fs = require('fs');
const axios = require('axios');

function processFile(path) {
  fs.readFile(path, 'utf8', async (err, data) => {
    if (err) {
      console.error(`Couldn't read file: ${err}`);
      process.exit(1);
    }

    let urls = data.split('\n').filter(u => u !== '');

    for (let url of urls) {
      try {
        resp = await axios.get(url);
      } catch {
        console.error(`Couldn't download ${url}`);
        continue;
      }

      let fileName = new URL(url).hostname;

      fs.writeFile(fileName, resp.data, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write: ${fileName}`);
        }
        console.log(`Done writing: ${fileName}`);
      });
    }
  });
}

processFile(process.argv[2]);

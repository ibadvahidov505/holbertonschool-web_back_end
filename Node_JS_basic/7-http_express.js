const express = require('express');
const countStudents = require('./3-read_file_async');

function createApp(database) {
  const app = express();

  app.get('/', (req, res) => {
    res.type('text');
    res.send('Hello Holberton School!');
  });

  app.get('/students', (req, res) => {
    countStudents(database)
      .then((data) => {
        res.type('text');
        res.status(200).send(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.type('text');
        res.status(500).send(`This is the list of our students\n${err.message}`);
      });
  });

  return app;
}

const database = process.argv[2];
const app = createApp(database);

if (require.main === module) {
  app.listen(1245);
}

module.exports = createApp;

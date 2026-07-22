const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((data) => {
      res.type('text');
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(500).type('text');
      res.send(`This is the list of our students\n${err.message}`);
    });
});

// Yalnız birbaşa işə salınanda serveri başlat
if (require.main === module) {
  app.listen(1245);
}

module.exports = app;

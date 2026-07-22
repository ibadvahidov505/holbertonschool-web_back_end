const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.status(200).type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((data) => {
      res
        .status(200)
        .type('text')
        .send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res
        .status(500)
        .type('text')
        .send(`This is the list of our students\n${err.message}`);
    });
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;

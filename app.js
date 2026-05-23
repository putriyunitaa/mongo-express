const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // kalau mau pakai PUT/DELETE
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // untuk file CSS/JS
app.use(methodOverride('_method')); // support method override

// redirect root ke /mahasiswa
app.get('/', (req, res) => {
  res.redirect('/mahasiswa');
});

// routes mahasiswa
app.use('/', mahasiswaRoutes);

// error handler global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Terjadi kesalahan!');
});

// start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

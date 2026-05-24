const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const dosenRoutes = require('./routes/dosenRoutes');
const matakuliahRoutes = require('./routes/matakuliahRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve style.css

// redirect root ke index
app.get('/', (req, res) => {
  res.render('index');
});

// routes
app.use('/', mahasiswaRoutes);
app.use('/', dosenRoutes);
app.use('/', matakuliahRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

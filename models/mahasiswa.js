const mongoose = require('../db');

const mahasiswaSchema = new mongoose.Schema({
  nrp: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: {
    type: String,
    required: true
  }
}, { collection: 'mahasiswa' }); // sinkron dengan Compass

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);

const mongoose = require('../db');

const mahasiswaSchema = new mongoose.Schema({
  nrp: String,
  nama: String,
  jurusan: String,
  matakuliah_diambil: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MataKuliah' }]
});

// tambahkan parameter ketiga 'mahasiswa'
module.exports = mongoose.model('Mahasiswa', mahasiswaSchema, 'mahasiswa');

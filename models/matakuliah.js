const mongoose = require('../db');

const matakuliahSchema = new mongoose.Schema({
  kode: String,
  nama: String,
  sks: Number,
  semester: Number,
  dosen: { type: mongoose.Schema.Types.ObjectId, ref: 'Dosen' }
});

// pakai koleksi 'matakuliah'
module.exports = mongoose.model('MataKuliah', matakuliahSchema, 'matakuliah');

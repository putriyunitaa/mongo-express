const mongoose = require('../db');

const dosenSchema = new mongoose.Schema({
  nip: String,
  nama: String,
  mengajar: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MataKuliah' }]
});

// pakai koleksi 'dosen'
module.exports = mongoose.model('Dosen', dosenSchema, 'dosen');

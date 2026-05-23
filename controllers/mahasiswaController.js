const Mahasiswa = require('../models/mahasiswa');

// CREATE
exports.create = async (req, res) => {
  try {
    const mhs = new Mahasiswa(req.body);
    await mhs.save();
    res.redirect('/mahasiswa');
  } catch (err) {
    console.error('Error create:', err);
    res.status(500).send('Gagal menambahkan data');
  }
};

// READ
exports.read = async (req, res) => {
  try {
    const data = await Mahasiswa.find();
    res.render('index', { mahasiswa: data });
  } catch (err) {
    console.error('Error read:', err);
    res.status(500).send('Gagal mengambil data');
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    await Mahasiswa.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/mahasiswa');
  } catch (err) {
    console.error('Error update:', err);
    res.status(500).send('Gagal mengupdate data');
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await Mahasiswa.findByIdAndDelete(req.params.id);
    res.redirect('/mahasiswa');
  } catch (err) {
    console.error('Error delete:', err);
    res.status(500).send('Gagal menghapus data');
  }
};

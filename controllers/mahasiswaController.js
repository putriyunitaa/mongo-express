const Mahasiswa = require('../models/mahasiswa');

exports.read = async (req, res) => {
  const data = await Mahasiswa.find()
    .populate({
      path: 'matakuliah_diambil',
      populate: { path: 'dosen' }
    });
  res.render('mahasiswa', { mahasiswa: data });
};

exports.create = async (req, res) => {
  const mhs = new Mahasiswa(req.body);
  await mhs.save();
  res.redirect('/mahasiswa');
};

exports.update = async (req, res) => {
  await Mahasiswa.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/mahasiswa');
};

exports.delete = async (req, res) => {
  await Mahasiswa.findByIdAndDelete(req.params.id);
  res.redirect('/mahasiswa');
};

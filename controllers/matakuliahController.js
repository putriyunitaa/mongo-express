const MataKuliah = require('../models/matakuliah');

exports.read = async (req, res) => {
  const data = await MataKuliah.find().populate('dosen');
  res.render('matakuliah', { matakuliah: data });
};

exports.create = async (req, res) => {
  const mk = new MataKuliah(req.body);
  await mk.save();
  res.redirect('/matakuliah');
};

exports.update = async (req, res) => {
  await MataKuliah.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/matakuliah');
};

exports.delete = async (req, res) => {
  await MataKuliah.findByIdAndDelete(req.params.id);
  res.redirect('/matakuliah');
};

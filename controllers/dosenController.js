const Dosen = require('../models/dosen');

exports.read = async (req, res) => {
  const data = await Dosen.find().populate('mengajar');
  res.render('dosen', { dosen: data });
};

exports.create = async (req, res) => {
  const dsn = new Dosen(req.body);
  await dsn.save();
  res.redirect('/dosen');
};

exports.update = async (req, res) => {
  await Dosen.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/dosen');
};

exports.delete = async (req, res) => {
  await Dosen.findByIdAndDelete(req.params.id);
  res.redirect('/dosen');
};

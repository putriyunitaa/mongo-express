const express = require('express');
const router = express.Router();
const controller = require('../controllers/mahasiswaController');

router.get('/mahasiswa', controller.read);
router.post('/mahasiswa', controller.create);
router.post('/mahasiswa/update/:id', controller.update);
router.get('/mahasiswa/delete/:id', controller.delete);

module.exports = router;

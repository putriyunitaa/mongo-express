const express = require('express');
const router = express.Router();
const controller = require('../controllers/mahasiswaController');

// READ
router.get('/mahasiswa', controller.read);

// CREATE
router.post('/mahasiswa', controller.create);

// UPDATE (pakai POST, bisa diganti PUT kalau pakai method-override)
router.post('/mahasiswa/update/:id', controller.update);

// DELETE (pakai GET, bisa diganti DELETE kalau pakai method-override)
router.get('/mahasiswa/delete/:id', controller.delete);

module.exports = router;

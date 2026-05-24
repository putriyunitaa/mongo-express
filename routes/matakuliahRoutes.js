const express = require('express');
const router = express.Router();
const controller = require('../controllers/matakuliahController');

router.get('/matakuliah', controller.read);
router.post('/matakuliah', controller.create);
router.post('/matakuliah/update/:id', controller.update);
router.get('/matakuliah/delete/:id', controller.delete);

module.exports = router;

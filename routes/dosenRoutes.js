const express = require('express');
const router = express.Router();
const controller = require('../controllers/dosenController');

router.get('/dosen', controller.read);
router.post('/dosen', controller.create);
router.post('/dosen/update/:id', controller.update);
router.get('/dosen/delete/:id', controller.delete);

module.exports = router;

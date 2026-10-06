const express = require('express');
const router = express.Router();

const propertiesController = require('../controllers/propertiesController');
const cekApiKey = require('../middlewares/cekApiKey');

// GET semua property dan filter berdasarkan kota
router.get('/properties', propertiesController.getAll);

// GET property berdasarkan ID
router.get('/properties/:id', propertiesController.getById);

// POST property baru
router.post('/properties', cekApiKey, propertiesController.create);

// PUT property berdasarkan ID
router.put('/properties/:id', cekApiKey, propertiesController.update);

// DELETE property berdasarkan ID
router.delete('/properties/:id', cekApiKey, propertiesController.remove);

module.exports = router;
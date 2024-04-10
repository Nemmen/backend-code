const express = require('express');

const router = express.Router()

const { uploadImage, uploadVedio, imageReducerUpload, localFileUpload } = require('../controllers/fileUpload');

router.post('/uploadImage', (req, res) => uploadImage(req, res));
router.post('/uploadVedio', (req, res) => uploadVedio(req, res));
router.post('/imageReducerUpload', (req, res) => imageReducerUpload(req, res));
router.post('/localFileUpload', (req, res) => localFileUpload(req, res));

module.exports = router
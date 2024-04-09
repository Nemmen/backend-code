const express = require('express');

const router = express.Router();

const { uploadImage, uploadVedio, imageReducerUpload, localFileUpload } = require('../controllers/fileUpload');

router.post('/uploadImage', uploadImage);
router.post('/uploadVedio', uploadVedio);
router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);

module.exports = router
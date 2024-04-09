const express = require("express")
const router = express.Router()
const {createComment} = require('../controllers/commentcontroller')
const { postCreate, getAllPost} = require('../controllers/postcontroller')
const { likePost, unLikePost } = require("../controllers/likecontroller")

router.post('/comments/create', createComment)
router.post('/post/create', postCreate)
router.get('/allpost', getAllPost )
router.post('/like', likePost )
router.post('/unlike', unLikePost )

module.exports = router
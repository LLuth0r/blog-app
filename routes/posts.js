const { Router } = require('express')
const controller = require('../controller/posts')
const router = Router()

router.get('/posts', controller.getPosts)
router.get('/posts/:id', controller.getPost)
router.post('/posts', controller.createPost)
router.put('/posts/:id', controller.updatePost)
router.delete('/posts/:id', controller.deletePost)

module.exports = router
import express from 'express';
import {getPosts, createPosts, updatePost} from '../controllers/posts.js'
const router=express.Router();

// router.get('/',(req, res) => {
//     res.send('This works.');
// });
router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePost);

export default router;
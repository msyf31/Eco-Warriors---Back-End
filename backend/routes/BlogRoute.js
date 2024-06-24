import express from 'express';
import {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
} from '../controllers/BlogController.js';

const router = express.Router();

router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.post('/blogs', createBlog);
router.patch('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;

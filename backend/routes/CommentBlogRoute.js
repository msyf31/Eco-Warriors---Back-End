import express from 'express';
import {
    getCommentBlogs,
    getCommentBlogById,
    createCommentBlog,
    updateCommentBlog,
    deleteCommentBlog
} from '../controllers/CommentBlogController.js';

const router = express.Router();

router.get('/comment-blogs', getCommentBlogs);
router.get('/comment-blogs/:id', getCommentBlogById);
router.post('/comment-blogs', createCommentBlog);
router.patch('/comment-blogs/:id', updateCommentBlog);
router.delete('/comment-blogs/:id', deleteCommentBlog);

export default router;

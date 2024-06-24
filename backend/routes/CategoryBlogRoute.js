import express from 'express';
import {
    getCategoryBlogs,
    getCategoryBlogById,
    createCategoryBlog,
    updateCategoryBlog,
    deleteCategoryBlog
} from '../controllers/CategoryBlogController.js';

const router = express.Router();

router.get('/category-blogs', getCategoryBlogs);
router.get('/category-blogs/:id', getCategoryBlogById);
router.post('/category-blogs', createCategoryBlog);
router.patch('/category-blogs/:id', updateCategoryBlog);
router.delete('/category-blogs/:id', deleteCategoryBlog);

export default router;

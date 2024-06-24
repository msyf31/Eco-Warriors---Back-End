import express from 'express';
import {
    getCategoryProducts,
    getCategoryProductById,
    createCategoryProduct,
    updateCategoryProduct,
    deleteCategoryProduct
} from '../controllers/CategoryProductController.js';

const router = express.Router();

router.get('/category-products', getCategoryProducts);
router.get('/category-products/:id', getCategoryProductById);
router.post('/category-products', createCategoryProduct);
router.patch('/category-products/:id', updateCategoryProduct);
router.delete('/category-products/:id', deleteCategoryProduct);

export default router;

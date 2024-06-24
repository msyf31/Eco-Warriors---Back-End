import express from 'express';
import {
    getImageProducts,
    getImageProductById,
    createImageProduct,
    updateImageProduct,
    deleteImageProduct
} from '../controllers/ImageProductController.js';

const router = express.Router();

router.get('/image_products', getImageProducts);
router.get('/image_products/:id', getImageProductById);
router.post('/image_products', createImageProduct);
router.patch('/image_products/:id', updateImageProduct);
router.delete('/image_products/:id', deleteImageProduct);

export default router;

import express from "express";
import {
    getCheckoutCarts, 
    getCheckoutCartById,
    createCheckoutCart,
    updateCheckoutCart,
    deleteCheckoutCart
} from "../controllers/CheckoutCartController.js";

const router = express.Router();

router.get('/checkout_carts', getCheckoutCarts);
router.get('/checkout_carts/:id', getCheckoutCartById);
router.post('/checkout_carts', createCheckoutCart);
router.patch('/checkout_carts/:id', updateCheckoutCart);
router.delete('/checkout_carts/:id', deleteCheckoutCart);

export default router;

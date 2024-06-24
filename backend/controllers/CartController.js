import db from '../config/Database.js';
import Cart from '../models/CartModel.js';

export const getCarts = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM cart');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getCartById = async (req, res) => {
    try {
        const response = await Cart.findOne({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createCart = async (req, res) => {
    try {
        await Cart.create(req.body);
        res.status(201).json({ msg: 'Cart Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCart = async (req, res) => {
    try {
        await Cart.update(req.body, {
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Cart Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCart = async (req, res) => {
    try {
        await Cart.destroy({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Cart Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

import db from '../config/Database.js';
import Checkout from '../models/CheckoutModel.js';

export const getCheckouts = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM checkout');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getCheckoutById = async (req, res) => {
    try {
        const response = await Checkout.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createCheckout = async (req, res) => {
    try {
        await Checkout.create(req.body);
        res.status(201).json({ msg: 'Checkout Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCheckout = async (req, res) => {
    try {
        await Checkout.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Checkout Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCheckout = async (req, res) => {
    try {
        await Checkout.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Checkout Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

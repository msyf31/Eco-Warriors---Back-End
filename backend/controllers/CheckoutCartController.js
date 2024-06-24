import db from '../config/Database.js';
import CheckoutCart from '../models/CheckoutCartModel.js';

export const getCheckoutCarts = async (req, res) => {
	try {
		const results = await CheckoutCart.findAll();
		res.status(200).json(results);
	} catch (error) {
		console.log(error.message);
	}
};

export const getCheckoutCartById = async (req, res) => {
	try {
		const response = await CheckoutCart.findOne({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

export const createCheckoutCart = async (req, res) => {
	try {
		await CheckoutCart.create(req.body);
		res.status(201).json({ msg: 'CheckoutCart Created' });
	} catch (error) {
		console.log(error.message);
	}
};

export const updateCheckoutCart = async (req, res) => {
	try {
		await CheckoutCart.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({ msg: 'CheckoutCart Updated' });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteCheckoutCart = async (req, res) => {
	try {
		await CheckoutCart.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({ msg: 'CheckoutCart Deleted' });
	} catch (error) {
		console.log(error.message);
	}
};

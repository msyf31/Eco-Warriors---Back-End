import db from '../config/Database.js';
import CategoryProduct from '../models/CategoryProductModel.js';

export const getCategoryProducts = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM category_product');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getCategoryProductById = async (req, res) => {
    try {
        const response = await CategoryProduct.findOne({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createCategoryProduct = async (req, res) => {
    try {
        await CategoryProduct.create(req.body);
        res.status(201).json({ msg: 'Category Product Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCategoryProduct = async (req, res) => {
    try {
        await CategoryProduct.update(req.body, {
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Category Product Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCategoryProduct = async (req, res) => {
    try {
        await CategoryProduct.destroy({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Category Product Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

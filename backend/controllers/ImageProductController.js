import db from '../config/Database.js';
import ImageProduct from '../models/ImageProductModel.js';

export const getImageProducts = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM image_product');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getImageProductById = async (req, res) => {
    try {
        const response = await ImageProduct.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createImageProduct = async (req, res) => {
    try {
        await ImageProduct.create(req.body);
        res.status(201).json({ msg: 'Image Product Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateImageProduct = async (req, res) => {
    try {
        await ImageProduct.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Image Product Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteImageProduct = async (req, res) => {
    try {
        await ImageProduct.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Image Product Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

import db from '../config/Database.js';
import CategoryBlog from '../models/CategoryBlogModel.js';

export const getCategoryBlogs = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM category_blog');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getCategoryBlogById = async (req, res) => {
    try {
        const response = await CategoryBlog.findOne({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createCategoryBlog = async (req, res) => {
    try {
        await CategoryBlog.create(req.body);
        res.status(201).json({ msg: 'Category Blog Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCategoryBlog = async (req, res) => {
    try {
        await CategoryBlog.update(req.body, {
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Category Blog Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCategoryBlog = async (req, res) => {
    try {
        await CategoryBlog.destroy({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Category Blog Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

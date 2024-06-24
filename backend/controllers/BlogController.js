import db from '../config/Database.js';
import Blog from '../models/BlogModel.js';

export const getBlogs = async (req, res) => {
	try {
		const [results] = await db.query('SELECT * FROM blog');
		res.status(200).json(results);
	} catch (error) {
		console.log(error.message);
	}
};

export const getBlogById = async (req, res) => {
	try {
		const response = await Blog.findOne({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

export const createBlog = async (req, res) => {
	try {
		await Blog.create(req.body);
		res.status(201).json({ msg: 'Blog Created' });
	} catch (error) {
		console.log(error.message);
	}
};

export const updateBlog = async (req, res) => {
	try {
		await Blog.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({ msg: 'Blog Updated' });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteBlog = async (req, res) => {
	try {
		await Blog.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({ msg: 'Blog Deleted' });
	} catch (error) {
		console.log(error.message);
	}
};

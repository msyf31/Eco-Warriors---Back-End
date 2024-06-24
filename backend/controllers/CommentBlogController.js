import db from '../config/Database.js';
import CommentBlog from '../models/CommentBlogModel.js';

export const getCommentBlogs = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM comment_blog');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getCommentBlogById = async (req, res) => {
    try {
        const response = await CommentBlog.findOne({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createCommentBlog = async (req, res) => {
    try {
        await CommentBlog.create(req.body);
        res.status(201).json({ msg: 'Comment Blog Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCommentBlog = async (req, res) => {
    try {
        await CommentBlog.update(req.body, {
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Comment Blog Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCommentBlog = async (req, res) => {
    try {
        await CommentBlog.destroy({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Comment Blog Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

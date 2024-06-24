import db from '../config/Database.js';
import Review from '../models/ReviewModel.js';

export const getReviews = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM reviews');
        res.status(200).json(results);
    } catch (error) {
        console.log(error.message);
    }
};

export const getReviewById = async (req, res) => {
    try {
        const response = await Review.findOne({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createReview = async (req, res) => {
    try {
        await Review.create(req.body);
        res.status(201).json({ msg: 'Review Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateReview = async (req, res) => {
    try {
        await Review.update(req.body, {
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Review Updated' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteReview = async (req, res) => {
    try {
        await Review.destroy({
			where: {
				id: req.params.id,
			},
        });
        res.status(200).json({ msg: 'Review Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

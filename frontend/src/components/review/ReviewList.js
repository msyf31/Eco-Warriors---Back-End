import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewList = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		getReviews();
	}, []);

	const getReviews = async () => {
		const response = await axios.get('http://localhost:5000/reviews');
		setReviews(response.data);
	};

	const deleteReview = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/reviews/${id}`);
			getReviews();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/review/add`} className="button is-success">
					Add New Review
				</Link>

				<Link to="/" className="button is-success">
					Home
				</Link>
				<Link to="/checkout-cart" className="button is-success">
					Checkout Cart
				</Link>
				<Link to="/user" className="button is-success">
					User
				</Link>
				<Link to="/product" className="button is-success">
					Product
				</Link>
				<Link to="/image-product" className="button is-success">
					Image Product
				</Link>
				<Link to="/category-product" className="button is-success">
					Category Product
				</Link>
				<Link to="/cart" className="button is-success">
					Cart
				</Link>
				<Link to="/checkout" className="button is-success">
					Checkout
				</Link>
				<Link to="/blog" className="button is-success">
					Blog
				</Link>
				<Link to="/category-blog" className="button is-success">
					Category Blog
				</Link>
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>ID</th>
							<th>ID Product</th>
							<th>ID User</th>
							<th>Rate</th>
							<th>Description</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{reviews.map((review, index) => (
							<tr key={`${review.id}`}>
								<td>{index + 1}</td>
								<td>{review.id}</td>
								<td>{review.id_product}</td>
								<td>{review.id_user}</td>
								<td>{review.rate}</td>
								<td>{review.description}</td>
								<td>{review.created_at}</td>
								<td>{review.updated_at}</td>
								<td>
									<Link
										to={`/review/edit/${review.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteReview(`${review.id}`)}
										className="button is-small is-danger">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReviewList;

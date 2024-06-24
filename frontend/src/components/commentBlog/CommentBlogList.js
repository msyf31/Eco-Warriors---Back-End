import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CommentBlogList = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		const response = await axios.get('http://localhost:5000/comment-blogs');
		setComments(response.data);
	};

	const deleteComment = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/comment-blogs/${id}`);
			getComments();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/comment-blog/add`} className="button is-success">
					Add New Comment
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
				<Link to="/review" className="button is-success">
					Review
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
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>ID Blog</th>
							<th>ID User</th>
							<th>Description</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{comments.map((comment, index) => (
							<tr key={`${comment.id_blog}-${comment.id_user}`}>
								<td>{index + 1}</td>
								<td>{comment.id_blog}</td>
								<td>{comment.id_user}</td>
								<td>{comment.description}</td>
								<td>{comment.created_at}</td>
								<td>{comment.updated_at}</td>
								<td>
									<Link
										to={`/comment-blog/edit/${comment.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() =>
											deleteComment(
												`${comment.id}`
											)
										}
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

export default CommentBlogList;

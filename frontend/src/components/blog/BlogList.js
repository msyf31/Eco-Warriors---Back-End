import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		getBlogs();
	}, []);

	const getBlogs = async () => {
		const response = await axios.get('http://localhost:5000/blogs');
		setBlogs(response.data);
	};

	const deleteBlog = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/blogs/${id}`);
			getBlogs();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/blog/add`} className="button is-success">
					Add New Blog
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
							<th>Title</th>
							<th>Slug</th>
							<th>Description</th>
							<th>Image</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{blogs.map((blog, index) => (
							<tr key={blog.id}>
								<td>{index + 1}</td>
								<td>{blog.id}</td>
								<td>{blog.title}</td>
								<td>{blog.slug}</td>
								<td>{blog.description}</td>
								<td>{blog.image}</td>
								<td>{blog.created_at}</td>
								<td>{blog.updated_at}</td>
								<td>
									<Link
										to={`/blog/edit/${blog.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteBlog(blog.id)}
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

export default BlogList;

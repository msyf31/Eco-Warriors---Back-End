import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageProductList = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getImages();
	}, []);

	const getImages = async () => {
		const response = await axios.get('http://localhost:5000/image_products');
		setImages(response.data);
	};

	const deleteImage = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/image_products/${id}`);
			getImages();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/image-product/add`} className="button is-success">
					Add New Image
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
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>ID</th>
							<th>ID Product</th>
							<th>Image</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{images.map((image, index) => (
							<tr key={image.id_product}>
								<td>{index + 1}</td>
								<td>{image.id}</td>
								<td>{image.id_product}</td>
								<td>{image.image}</td>
								<td>{image.created_at}</td>
								<td>{image.updated_at}</td>
								<td>
									<Link
										to={`/image-product/edit/${image.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteImage(image.id)}
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

export default ImageProductList;

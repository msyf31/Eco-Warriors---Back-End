import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const response = await axios.get('http://localhost:5000/products');
		setProduct(response.data);
	};

	const deleteProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/products/${id}`);
			getProducts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/product/add`} className="button is-success">
					Add New Product
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
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>SKU</th>
							<th>Title</th>
							<th>Slug</th>
							<th>Description</th>
							<th>Price</th>
							<th>Size</th>
							<th>Weight</th>
							<th>Stock</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={product.id}>
								<td>{index + 1}</td>
								<td>{product.sku}</td>
								<td>{product.title}</td>
								<td>{product.slug}</td>
								<td>{product.description}</td>
								<td>{product.price}</td>
								<td>{product.size}</td>
								<td>{product.weight}</td>
								<td>{product.stock}</td>
								<td>{product.created_at}</td>
								<td>{product.updated_at}</td>
								<td>
									<Link
										to={`/product/edit/${product.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteProduct(product.id)}
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

export default ProductList;

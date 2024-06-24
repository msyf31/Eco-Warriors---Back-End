import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartList = () => {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		getCarts();
	}, []);

	const getCarts = async () => {
		const response = await axios.get('http://localhost:5000/carts');
		setCarts(response.data);
	};

	const deleteCart = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/carts/${id}`);
			getCarts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/cart/add`} className="button is-success">
					Add New Cart
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
							<th>ID Product</th>
							<th>ID User</th>
							<th>Quantity</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{carts.map((cart, index) => (
							<tr key={`${cart.id}`}>
								<td>{index + 1}</td>
								<td>{cart.id_product}</td>
								<td>{cart.id_user}</td>
								<td>{cart.quantity}</td>
								<td>{cart.created_at}</td>
								<td>{cart.updated_at}</td>
								<td>
									<Link
										to={`/cart/edit/${cart.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteCart(`${cart.id}`)}
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

export default CartList;

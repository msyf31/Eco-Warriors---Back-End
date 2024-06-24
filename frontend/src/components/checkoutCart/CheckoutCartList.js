import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutListCart = () => {
	const [checkout_carts, setCheckoutCart] = useState([]);

	useEffect(() => {
		getCheckoutCart();
	}, []);

	const getCheckoutCart = async () => {
		const response = await axios.get('http://localhost:5000/checkout_carts');
		setCheckoutCart(response.data);
	};

	const deleteCheckoutCart = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/checkout_carts/${id}`);
			getCheckoutCart();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/checkout-cart/add`} className="button is-success">
					Add New Checkout Cart
				</Link>

				<Link to="/" className="button is-success">
					Home
				</Link>
				<Link to="/checkout" className="button is-success">
					Checkout
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
				<Link to="/blog" className="button is-success">
					Blog
				</Link>
				<Link to="/category-blog" className="button is-success">
					Category Blog
				</Link>
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>ID</th>
							<th>ID Carts</th>
							<th>ID Checkout</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{checkout_carts.map((checkout_cart, index) => (
							<tr key={checkout_cart.id}>
								<td>{index + 1}</td>
								<td>{checkout_cart.id}</td>
								<td>{checkout_cart.id_cart}</td>
								<td>{checkout_cart.id_checkout}</td>
								<td>{checkout_cart.created_at}</td>
								<td>{checkout_cart.updated_at}</td>
								<td>
									<Link
										to={`/checkout-cart/edit/${checkout_cart.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteCheckoutCart(checkout_cart.id)}
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

export default CheckoutListCart;

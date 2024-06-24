import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutList = () => {
	const [checkouts, setCheckouts] = useState([]);

	useEffect(() => {
		getCheckouts();
	}, []);

	const getCheckouts = async () => {
		const response = await axios.get('http://localhost:5000/checkouts');
		setCheckouts(response.data);
	};

	const deleteCheckout = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/checkouts/${id}`);
			getCheckouts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/checkout/add`} className="button is-success">
					Add New Checkout
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
							<th>ID User</th>
							<th>Payment Status</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{checkouts.map((checkout, index) => (
							<tr key={checkout.id}>
								<td>{index + 1}</td>
								<td>{checkout.id}</td>
								<td>{checkout.id_user}</td>
								<td>{checkout.payment_status}</td>
								<td>{checkout.created_at}</td>
								<td>{checkout.updated_at}</td>
								<td>
									<Link
										to={`/checkout/edit/${checkout.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteCheckout(checkout.id)}
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

export default CheckoutList;

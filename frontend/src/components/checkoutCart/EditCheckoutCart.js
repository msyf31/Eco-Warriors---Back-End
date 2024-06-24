import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCheckoutCart = () => {
	const [idCart, setIdCart] = useState('');
	const [idCheckout, setIdCheckout] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCheckoutById();
	}, []);

	const updateCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/checkout_carts/${id}`, {
				id_cart: idCart,
				id_checkout: idCheckout,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCheckoutById = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5000/checkout_carts/${id}`
			);
			setIdCart(response.data.id_cart);
			setIdCheckout(response.data.id_checkout);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCheckout}>
					<div className="field">
						<label className="label">ID Cart</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idCart}
								onChange={(e) => setIdCart(e.target.value)}
								placeholder="ID Cart"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">ID Checkout</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idCheckout}
								onChange={(e) => setIdCheckout(e.target.value)}
								placeholder="ID Checkout"
							/>
						</div>
					</div>
					<div className="field">
						<button type="submit" className="button is-success">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditCheckoutCart;

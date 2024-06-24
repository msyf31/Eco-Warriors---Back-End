import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCheckoutCart = () => {
	const [id, setId] = useState(uuidv4());
	const [idCart, setIdCart] = useState('');
    const [idCheckout, setIdCheckout] = useState('');
	const navigate = useNavigate();

	const saveCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/checkout_carts', {
				id,
                id_cart: idCart,
                id_checkout: idCheckout,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveCheckout}>
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
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCheckoutCart;

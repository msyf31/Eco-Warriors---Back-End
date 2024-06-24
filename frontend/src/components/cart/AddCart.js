import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCart = () => {
	const [idProduct, setIdProduct] = useState('');
	const [idUser, setIdUser] = useState('');
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();
	const [id, setId] = useState(uuidv4());

	const saveCart = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/carts', {
                id,
				id_product: idProduct,
				id_user: idUser,
				quantity,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveCart}>
					<div className="field">
						<label className="label">Product ID</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idProduct}
								onChange={(e) => setIdProduct(e.target.value)}
								placeholder="Product ID"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">User ID</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idUser}
								onChange={(e) => setIdUser(e.target.value)}
								placeholder="User ID"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Quantity</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								placeholder="Quantity"
								min="1"
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

export default AddCart;

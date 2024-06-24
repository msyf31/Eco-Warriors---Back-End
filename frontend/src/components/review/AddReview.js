import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddReview = () => {
	const [idProduct, setIdProduct] = useState('');
	const [idUser, setIdUser] = useState('');
	const [rate, setRate] = useState(1);
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const [id, setId] = useState(uuidv4());

	const saveReview = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/reviews', {
                id,
				id_product: idProduct,
				id_user: idUser,
				rate,
				description,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveReview}>
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
						<label className="label">Rate</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={rate}
								onChange={(e) => setRate(e.target.value)}
								placeholder="Rate"
								min="1"
								max="5"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea
								className="textarea"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"></textarea>
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

export default AddReview;

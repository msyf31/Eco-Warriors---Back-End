import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddImageProduct = () => {
	const [idProduct, setIdProduct] = useState('');
	const [image, setImage] = useState('');
	const navigate = useNavigate();
	const [id, setId] = useState(uuidv4());

	const saveImageProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/image_products', {
                id: id,
				id_product: idProduct,
				image,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveImageProduct}>
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
						<label className="label">Image URL</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={image}
								onChange={(e) => setImage(e.target.value)}
								placeholder="Image URL"
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

export default AddImageProduct;

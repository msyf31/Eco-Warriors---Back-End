import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCategoryProduct = () => {
	const [idProduct, setIdProduct] = useState('');
	const [category, setCategory] = useState('');
	const [id, setId] = useState(uuidv4());
	const navigate = useNavigate();

	const saveCategoryProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/category-products', {
                id: id,
				id_product: idProduct,
				category,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveCategoryProduct}>
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
						<label className="label">Category</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								placeholder="Category"
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

export default AddCategoryProduct;

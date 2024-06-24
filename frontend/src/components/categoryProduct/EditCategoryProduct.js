import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategoryProduct = () => {
	const [idProduct, setIdProduct] = useState('');
	const [category, setCategory] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCategoryProductById();
	}, []);

	const updateCategoryProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/category-products/${id}`, {
				category,
				id_product: idProduct,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCategoryProductById = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5000/category-products/${id}`
			);
			setCategory(response.data.category);
			setIdProduct(response.data.id_product);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCategoryProduct}>
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
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditCategoryProduct;

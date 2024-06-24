import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
	const [sku, setSku] = useState('');
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [size, setSize] = useState('');
	const [weight, setWeight] = useState('');
	const [stock, setStock] = useState('');
	const [id, setId] = useState(uuidv4());
	const navigate = useNavigate();

	const saveProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/products', {
				id,
				sku,
				title,
				slug,
				description,
				price,
				size,
				weight,
				stock: parseInt(stock, 10),
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveProduct}>
					<div className="field">
						<label className="label">SKU</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={sku}
								onChange={(e) => setSku(e.target.value)}
								placeholder="SKU"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Title</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Title"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Slug</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={slug}
								onChange={(e) => setSlug(e.target.value)}
								placeholder="Slug"
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
						<label className="label">Price</label>
						<div className="control">
							<input
								type="number"
								step="0.01"
								className="input"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
								placeholder="Price"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Size</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={size}
								onChange={(e) => setSize(e.target.value)}
								placeholder="Size"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Weight</label>
						<div className="control">
							<input
								type="number"
								step="0.01"
								className="input"
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
								placeholder="Weight"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Stock</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={stock}
								onChange={(e) => setStock(e.target.value)}
								placeholder="Stock"
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

export default AddProduct;

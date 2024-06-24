import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
	const [sku, setSku] = useState('');
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [size, setSize] = useState('');
	const [weight, setWeight] = useState('');
	const [stock, setStock] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getProductById();
	}, []);

	const updateProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/products/${id}`, {
				sku,
				title,
				slug,
				description,
				price,
				size,
				weight,
				stock,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getProductById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/products/${id}`);
			setSku(response.data.sku);
			setTitle(response.data.title);
			setSlug(response.data.slug);
			setDescription(response.data.description);
			setPrice(response.data.price);
			setSize(response.data.size || '');
			setWeight(response.data.weight || '');
			setStock(response.data.stock);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateProduct}>
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
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditProduct;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCategoryBlog = () => {
	const [idBlog, setIdBlog] = useState('');
	const [category, setCategory] = useState('');
	const navigate = useNavigate();
	const [id, setId] = useState(uuidv4());

	const saveCategoryBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/category-blogs', {
				id,
				id_blog: idBlog,
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
				<form onSubmit={saveCategoryBlog}>
					<div className="field">
						<label className="label">Blog ID</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idBlog}
								onChange={(e) => setIdBlog(e.target.value)}
								placeholder="Blog ID"
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

export default AddCategoryBlog;

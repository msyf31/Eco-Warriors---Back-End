import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBlog = () => {
	const [id, setId] = useState(uuidv4());
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const navigate = useNavigate();

	const saveBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/blogs', {
				id,
				title,
				slug,
				description,
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
				<form onSubmit={saveBlog}>
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

export default AddBlog;

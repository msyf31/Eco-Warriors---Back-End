import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getBlogById();
	}, []);

	const updateBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/blogs/${id}`, {
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

	const getBlogById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/blogs/${id}`);
			setTitle(response.data.title);
			setSlug(response.data.slug);
			setDescription(response.data.description);
			setImage(response.data.image);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateBlog}>
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
						<label className="label">Image</label>
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
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditBlog;

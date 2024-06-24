import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCommentBlog = () => {
	const [idBlog, setIdBlog] = useState('');
	const [idUser, setIdUser] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCommentBlogById();
	}, []);

	const updateCommentBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/comment-blogs/${id}`, {
				description,
				id_blog: idBlog,
				id_user: idUser,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCommentBlogById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/comment-blogs/${id}`);
			setDescription(response.data.description);
			setIdBlog(response.data.id_blog);
			setIdUser(response.data.id_user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCommentBlog}>
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
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditCommentBlog;

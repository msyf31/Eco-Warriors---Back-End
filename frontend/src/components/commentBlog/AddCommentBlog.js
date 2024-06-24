import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCommentBlog = () => {
	const [idBlog, setIdBlog] = useState('');
	const [idUser, setIdUser] = useState('');
	const [description, setDescription] = useState('');
	const [id, setId] = useState(uuidv4());
	const navigate = useNavigate();

	const saveCommentBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/comment-blogs', {
                id,
				id_blog: idBlog,
				id_user: idUser,
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
				<form onSubmit={saveCommentBlog}>
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
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCommentBlog;

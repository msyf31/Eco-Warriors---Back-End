import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [id, setId] = useState(uuidv4());
	const navigate = useNavigate();

	const saveUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/users', {
				id,
				name,
				email,
				password,
				address,
				phone,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveUser}>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Name"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Address</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								placeholder="Address"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Phone</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Phone"
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

export default AddUser;

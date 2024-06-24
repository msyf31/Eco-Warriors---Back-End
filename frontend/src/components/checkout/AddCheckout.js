import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCheckout = () => {
	const [id, setId] = useState(uuidv4());
	const [idUser, setIdUser] = useState('');
	const [paymentStatus, setPaymentStatus] = useState('unpaid');
	const navigate = useNavigate();

	const saveCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/checkouts', {
				id,
				id_user: idUser,
				payment_status: paymentStatus,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveCheckout}>
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
						<label className="label">Payment Status</label>
						<div className="control">
							<select
								className="input"
								value={paymentStatus}
								onChange={(e) => setPaymentStatus(e.target.value)}>
								<option value="unpaid" selected>Unpaid</option>
								<option value="paid">Paid</option>
							</select>
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

export default AddCheckout;

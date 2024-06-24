import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCheckout = () => {
	const [idUser, setIdUser] = useState('');
	const [paymentStatus, setPaymentStatus] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCheckoutById();
	}, []);

	const updateCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/checkouts/${id}`, {
				id_user: idUser,
				payment_status: paymentStatus,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCheckoutById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/checkouts/${id}`);
			setIdUser(response.data.id_user);
			setPaymentStatus(response.data.payment_status);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCheckout}>
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
								<option value="unpaid" selected>
									Unpaid
								</option>
								<option value="paid">Paid</option>
							</select>
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

export default EditCheckout;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const response = await axios.get('http://localhost:5000/users');
		setUser(response.data);
	};

	const deleteUser = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/users/${id}`);
			getUsers();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/user/add`} className="button is-success">
					Add New User
				</Link>
				<Link to="/" className="button is-success">
					Home
				</Link>
				<Link to="/checkout-cart" className="button is-success">
					Checkout Cart
				</Link>
				<Link to="/product" className="button is-success">
					Product
				</Link>
				<Link to="/image-product" className="button is-success">
					Image Product
				</Link>
				<Link to="/category-product" className="button is-success">
					Category Product
				</Link>
				<Link to="/review" className="button is-success">
					Review
				</Link>
				<Link to="/cart" className="button is-success">
					Cart
				</Link>
				<Link to="/checkout" className="button is-success">
					Checkout
				</Link>
				<Link to="/blog" className="button is-success">
					Blog
				</Link>
				<Link to="/category-blog" className="button is-success">
					Category Blog
				</Link>
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Email</th>
							<th>Adress</th>
							<th>Phone</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.address}</td>
								<td>{user.phone}</td>
								<td>{user.created_at}</td>
								<td>{user.updated_at}</td>
								<td>
									<Link
										to={`/user/edit/${user.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteUser(user.id)}
										className="button is-small is-danger">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserList;

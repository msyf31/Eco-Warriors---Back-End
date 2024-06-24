import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const Checkout = db.define(
	'checkout',
	{
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
		},
		id_user: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
		},
		payment_status: {
			type: DataTypes.ENUM('paid', 'unpaid'),
			defaultValue: 'unpaid',
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.NOW,
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.NOW,
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
);

export default Checkout;

import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const ImageProduct = db.define(
	'image_product',
	{
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},
		id_product: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			references: {
				model: 'products',
				key: 'id',
			},
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
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

export default ImageProduct;

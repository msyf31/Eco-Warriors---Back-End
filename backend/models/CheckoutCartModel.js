import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const CheckoutCart = db.define('checkout_cart', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        allowNull: false
    },
    id_cart: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'cart',
            key: 'id'
        }
    },
    id_checkout: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'checkout',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default CheckoutCart;

(async()=>{
    await db.sync();
})();

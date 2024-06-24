import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
const { DataTypes } = Sequelize;

const CommentBlog = db.define('comment_blog', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        allowNull: false
    },
    id_blog: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id'
        }
    },
    id_user: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
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

export default CommentBlog;

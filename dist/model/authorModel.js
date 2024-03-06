"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
// interface IAuthor {
//   fullName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }
class Author extends sequelize_1.Model {
}
Author.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    confirmPassword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            passwordsMatch(value) {
                if (this.password !== value) {
                    throw new Error("Passwords do not match");
                }
            },
        },
    },
}, {
    sequelize: database_config_1.default,
    modelName: "Author",
    timestamps: true,
    underscored: true,
});
exports.default = Author;

import { Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  priceCard: string;
  categoryId: number;
  uploadImg: string;
}

export interface ProductCreateAttributes extends Optional<Product, "id"> {}

export interface ProductInstance
  extends Model<Product, ProductCreateAttributes> {}

export const Product = sequelize.define<ProductInstance, Product>("Product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  priceCard: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "categories", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  uploadImg: {
    type: DataTypes.STRING,
  },
});

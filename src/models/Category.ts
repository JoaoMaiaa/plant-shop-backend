import { Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Category {
  id: number;
  name: string;
}

export interface CategoryCreateAttributes extends Optional<Category, "id"> {}

export interface CategoryInstance
  extends Model<Category, CategoryCreateAttributes> {}

export const Category = sequelize.define<CategoryInstance, Category>(
  "Category",
  {
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
  }
);

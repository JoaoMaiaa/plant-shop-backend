import { Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Comment {
  consumerId: number;
  productId: number;
  comment: string;
}

export interface CommentCreateAttributes
  extends Optional<Comment, "consumerId" | "productId"> {}

export interface CommentInstance
  extends Model<Comment, CommentCreateAttributes> {}

export const Comment = sequelize.define<
  CommentInstance,
  CommentCreateAttributes
>("Comment", {
  consumerId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "consumers", key: "id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  productId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "products", key: "id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  comment: {
    type: DataTypes.TEXT,
  },
});

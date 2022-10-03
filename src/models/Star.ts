import { Optional, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Star {
  consumerId: number;
  productId: number;
}

export interface StarCreateAttributes
  extends Optional<Star, "consumerId" | "productId"> {}

export interface StarInstance extends Model<StarCreateAttributes, Star> {}

export const Star = sequelize.define<StarInstance, Star>("Star", {
  consumerId: {
    type: DataTypes.INTEGER,
  },
  productId: {
    type: DataTypes.INTEGER,
  },
});

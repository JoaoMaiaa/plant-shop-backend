import { Model, DataTypes, Optional } from "sequelize";
import bcrypt from "bcrypt";

import { sequelize } from "../database";

export interface Consumer {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  imgUrl: string;
}

type CheckPasswordCallback = (err: Error | undefined, isSame: boolean) => void;

export interface ConsumerAttributes
  extends Optional<Consumer, "id" | "imgUrl"> {}

export interface ConsumerInstance
  extends Model<Consumer, ConsumerAttributes>,
    Consumer {
  checkPassword: (password: string, callbackfn: CheckPasswordCallback) => void;
}

export const Consumer = sequelize.define<ConsumerInstance, Consumer>(
  "Consumer",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeSave: async (consumer) => {
        if (consumer.isNewRecord || consumer.changed("password")) {
          consumer.password = await bcrypt.hash(
            consumer.password.toString(),
            10
          );
        }
      },
    },
  }
);

Consumer.prototype.checkPassword = function (
  password: string,
  callbackfn: (err: Error | undefined, isSame: boolean) => void
) {
  bcrypt.compare(password, this.password, (err, isSame) => {
    if (err) {
      callbackfn(err, false);
    } else {
      callbackfn(err, isSame);
    }
  });
};

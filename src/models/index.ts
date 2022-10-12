import { Consumer } from "./Consumer";
import { Comment } from "./Comment";
import { Product } from "./Product";
import { Category } from "./Category";
import { Star } from "./Star";

Category.hasMany(Product, { as: "products" });
Product.belongsTo(Category);

Comment.belongsTo(Consumer);
Comment.belongsTo(Product);
Star.belongsTo(Consumer);
Star.belongsTo(Product);

Product.belongsToMany(Consumer, { through: Star });
Product.belongsToMany(Consumer, { through: Comment });

export { Consumer, Comment, Product, Category, Star };

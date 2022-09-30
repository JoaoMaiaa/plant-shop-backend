import { Consumer } from "./Consumer";
import { Comment } from "./Comment";
import { Product } from "./Product";
import { Category } from "./Category";

Consumer.hasMany(Comment);
Comment.belongsTo(Consumer);

Category.hasMany(Product);
Product.belongsTo(Category);

export { Consumer, Comment, Product, Category };

import { Consumer } from "./Consumer";
import { Comment } from "./Comment";

Consumer.hasMany(Comment);
Comment.belongsTo(Consumer);

export { Consumer, Comment };

const Comments = require("./comment");
const Post = require("./post");
const Users = require("./user");

Post.belongsTo(Users, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comments, {
  foreignKey: "post_id",
});

Comments.belongsTo(Users, {
  foreignKey: "user_id",
});

module.exports = {
  Users,
  Post,
  Comments,
};

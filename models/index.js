const User = require('./User');


// //create associations
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
//   });
  
// Comment.belongsTo(Post, {
//     foreignKey: 'post_id'
// });
  
// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });
  


module.exports = {User};
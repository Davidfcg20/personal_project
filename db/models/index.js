const { CommentarySchema, Commentaries } = require('./../models/commentary.model');
const { CompanySchema, Companies } = require('./../models/company.model');
const { ConsumptionSchema, Consumptions } = require('./consumption.model');
const { LocationSchema, Locations } = require('./../models/location.model');
const { ProductSchema, Products } = require('./../models/product.model');
const { ProfileSchema, Profiles } = require('./../models/profile.model');
const { RatingSchema, Ratings } = require('./rating.model');
const { ReviewSchema, Reviews } = require('./../models/review.model');
const { StatusSchema, Statuses } = require('./../models/status.model');
const { UserSchema, Users } = require('./../models/user.model');

function setupModels(sequelize){
  Profiles.init(ProfileSchema, Profiles.config(sequelize));
  Companies.init(CompanySchema, Companies.config(sequelize));
  Locations.init(LocationSchema, Locations.config(sequelize));
  Ratings.init(RatingSchema, Ratings.config(sequelize));
  Statuses.init(StatusSchema, Statuses.config(sequelize));
  Commentaries.init(CommentarySchema, Commentaries.config(sequelize));
  Reviews.init(ReviewSchema, Reviews.config(sequelize));
  Products.init(ProductSchema, Products.config(sequelize));
  Consumptions.init(ConsumptionSchema, Consumptions.config(sequelize));
  Users.init(UserSchema, Users.config(sequelize));

  //Associates
  Companies.associate(sequelize.models);
  Locations.associate(sequelize.models);
  Reviews.associate(sequelize.models);
  Commentaries.associate(sequelize.models);
  Ratings.associate(sequelize.models);
  Statuses.associate(sequelize.models);
  Products.associate(sequelize.models);
}

module.exports = { setupModels };

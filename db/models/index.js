const { CompanySchema, Companies } = require('./../models/company.model');
const { ProfileSchema, Profiles } = require('./../models/profile.model');
const { LocationSchema, Locations } = require('./../models/location.model');
const { RatingSchema, Ratings } = require('./../models/rating');
const { StatusSchema, Statuses } = require('./../models/status.model');
const { CommentarySchema, Commentaries } = require('./../models/commentary.model');

function setupModels(sequelize){
  Companies.init(CompanySchema, Companies.config(sequelize));
  Profiles.init(ProfileSchema, Profiles.config(sequelize));
  Locations.init(LocationSchema, Locations.config(sequelize));
  Ratings.init(RatingSchema, Ratings.config(sequelize));
  Statuses.init(StatusSchema, Statuses.config(sequelize));
  Commentaries.init(CommentarySchema, Commentaries.config(sequelize));
}

module.exports = { setupModels };

const { CompanySchema, Companies } = require('./../models/company.model');
const { ProfileSchema, Profiles } = require('./../models/profile.model');
const { LocationSchema, Locations } = require('./../models/location.model');
const { RatingSchema, Ratings } = require('./rating.model');
const { StatusSchema, Statuses } = require('./../models/status.model');
const { CommentarySchema, Commentaries } = require('./../models/commentary.model');
const { VisitSchema, Visits } = require('./../models/visits.model');

function setupModels(sequelize){
  Companies.init(CompanySchema, Companies.config(sequelize));
  Profiles.init(ProfileSchema, Profiles.config(sequelize));
  Locations.init(LocationSchema, Locations.config(sequelize));
  Ratings.init(RatingSchema, Ratings.config(sequelize));
  Statuses.init(StatusSchema, Statuses.config(sequelize));
  Commentaries.init(CommentarySchema, Commentaries.config(sequelize));
  Visits.init(VisitSchema, Visits.config(sequelize));

  //Associates
  Companies.associate(sequelize.models);
  Locations.associate(sequelize.models);
  Visits.associate(sequelize.models);
  Commentaries.associate(sequelize.models);
  Ratings.associate(sequelize.models);
  Statuses.associate(sequelize.models);
}

module.exports = { setupModels };

const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class LocationService {
  constructor(){

  }

  async create(data){
    const newLocation = await sequelize.models.Location.create(data, {
      include: [{
        association: 'company',
        include: ['profile']
      }]
    });
    return newLocation;
  }

  async findOne(locationId){
    const location = await sequelize.models.Location.findByPk(locationId, {
      include: [{
        association: 'company',
        include: ['profile']
      },'visit']
    });
    if(!location){
      throw Boom.notFound('location not found');
    } else {
      return location;
    }
  }

  async findAll(){
    const rta = await sequelize.models.Location.findAll();
    return rta;
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = LocationService;

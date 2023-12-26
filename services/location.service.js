const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class LocationService {
  constructor(){

  }

  async create(data){
    const newLocation = await sequelize.models.Location.create(data);
    return newLocation;
  }

  async findOne(locationId){
    const location = await sequelize.models.Location.findByPk(locationId, {
      include: [{
        association: 'company',
        include: ['profile']
      },'review']
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

  async update(locationId, changes){
    const location = await this.findOne(locationId);
    const rta = await location.update(changes);
    return rta;
  }

  async delete(){

  }
}

module.exports = LocationService;

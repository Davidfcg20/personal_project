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
    const company = await sequelize.models.Location.findByPk(locationId, {
      include: ['company']
    });
    if(!company){
      throw Boom.notFound('location not found');
    } else {
      return company;
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

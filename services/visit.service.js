const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class VisitService {

  constructor(){

  }

  async create(data){
    const newVisit = await sequelize.models.Visit.create(data);
    return newVisit;
  }

  async findOne(visitId){
    const visit = await sequelize.models.Visit.findByPk(visitId, {
      include: ['location', 'commentary', 'rating', 'status']
    });
    if(!visit){
      throw Boom.notFound('visit not found');
    } else {
      return visit;
    }
  }

  async findAll(){
    const rta = await sequelize.models.Visit.findAll();
    return rta;
  }

  async update(){

  }

  async delete(){

  }

}

module.exports = VisitService;

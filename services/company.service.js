const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class CompanyService {

  constructor(){

  }

  async create(data){
    try {
      const newCompany =  await data;
      return newCompany;
    } catch (error) {
      throw Boom.notFound(`error creating: ${error}`);
    }

  }

  async finOne(){

  }

  async findAll(){
    try {
      //const [rta] = await sequelize.query('SELECT * FROM prueba');
      const rta = await sequelize.models.Company.findAll();
      return rta;
    } catch (error) {
      throw Boom.notFound(`error found: ${error}`);
    }
  }

  async update(){

  }

  async delete(){

  }

}

module.exports = CompanyService;

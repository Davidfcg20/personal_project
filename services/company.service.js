const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class CompanyService {

  constructor(){

  }

  async create(data){
    try {
      const newCompany =  await sequelize.models.Company.create(data);
      return newCompany;
    } catch (error) {
      throw Boom.notFound(`error creating: ${error}`);
    }
  }

  async findOne(companyId){
    try {
      const company = await sequelize.models.Company.findByPk(companyId);
      if(!company){
        throw Boom.notFound('company not found');
      } else {
        return company;
      }
    } catch (error) {
      throw Boom.notFound(`error finding: ${error}`);
    }
  }

  async findAll(){
    try {
      //const [rta] = await sequelize.query('SELECT * FROM x');
      const rta = await sequelize.models.Company.findAll();
      return rta;
    } catch (error) {
      throw Boom.notFound(`error found: ${error}`);
    }
  }

  async update(companyId, changes){
    try {
      const company = await  this.findOne(companyId);
      const rta = await company.update(changes);
      return rta;
    } catch (error) {
      throw Boom.notFound(`error updating: ${error}`);
    }
  }

  async delete(companyId){
    try {
      const company = await  this.findOne(companyId);
      await company.destroy();
      return companyId;
    } catch (error) {
      throw Boom.notFound(`error deleting: ${error}`);
    }
  }
}

module.exports = CompanyService;

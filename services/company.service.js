const Boom = require('@hapi/boom');

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
      const rta = await 'findAll';
      return rta;
    } catch (error) {
      throw Boom.notFound(`error creating: ${error}`);
    }
  }

  async update(){

  }

  async delete(){

  }

}

module.exports = CompanyService;

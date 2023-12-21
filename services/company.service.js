const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class CompanyService {

  constructor(){

  }

  async create(data){
    // const newProfile = await sequelize.models.Profile.create(data.profile);
    // const newCompany =  await sequelize.models.Company.create({
    //   ...data,
    //   profileId: newProfile.profileId
    // });
    const newCompany = await sequelize.models.Company.create(data, {
      include: ['profile']
    });
    return newCompany;
  }

  async findOne(companyId){
    const company = await sequelize.models.Company.findByPk(companyId, {
      include: ['profile', 'location']
    });
    if(!company){
      throw Boom.notFound('company not found');
    } else {
      return company;
    }
  }

  async findAll(){
    //const [rta] = await sequelize.query('SELECT * FROM x');
    const rta = await sequelize.models.Company.findAll({
      include: ['profile']
    });
    return rta;
  }

  async update(companyId, changes){
    const company = await  this.findOne(companyId);
    const rta = await company.update(changes);
    return rta;
  }

  async delete(companyId){
    // try {
    const company = await  this.findOne(companyId);
    await company.destroy();
    return companyId;
    // } catch (error) {
    //   throw Boom.notFound(`error finding: ${error}`);
    // }
  }
}

module.exports = CompanyService;

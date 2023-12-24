const Boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class ReviewService {

  constructor(){

  }

  async create(data){
    const newVisit = await sequelize.models.Review.create(data);
    return newVisit;
  }

  async findOne(reviewId){
    const visit = await sequelize.models.Review.findByPk(reviewId, {
      include: ['location', 'commentary', 'rating', 'status']
    });
    if(!visit){
      throw Boom.notFound('review not found');
    } else {
      return visit;
    }
  }

  async findAll(){
    const rta = await sequelize.models.Review.findAll();
    return rta;
  }

  async update(){

  }

  async delete(){

  }

}

module.exports = ReviewService;

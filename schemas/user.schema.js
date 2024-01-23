const Joi = require('joi');

const userId = Joi.number().integer();
const userLastName = Joi.string();
const userFirstName = Joi.string();
const userAge = Joi.number().integer();
const userEmail = Joi.string().email();
const userPassword = Joi.string();
const userRole = Joi.string();


const createUserSchema = Joi.object({
  userId: userId.required(),
  userLastName: userLastName.required(),
  userFirstName: userFirstName.required(),
  userAge: userAge.required(),
  userEmail: userEmail.required(),
  userPassword: userPassword.required(),
  userRole: userRole.optional(),
});

const getUserSchema = Joi.object({
  userId: userId.required(),
});

const updateUserSchema = Joi.object({
  userLastName: userLastName.optional(),
  userFirstName: userFirstName.optional(),
  userAge: userAge.optional(),
  userEmail: userEmail.optional(),
  userPassword: userPassword.optional(),
  userRole: userRole.optional(),
});

module.exports = { userId, createUserSchema, getUserSchema, updateUserSchema };

import { Joi } from '../../../middlewares/validator.js';

export const create = {
  body: Joi.object().keys({
    companyName: Joi.string().required(),
    companyRegistrationNumber: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    accountingEmail: Joi.string().email().allow(''),
    phoneNumber: Joi.string().required(),
    address: Joi.object().keys({
      streetAddress: Joi.string().required(),
      additionalAddressLine: Joi.string().allow(''),
      city: Joi.string().required(),
      region: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
      sameInvoicingAddress: Joi.boolean(),
    }),
    invoiceAddress: Joi.object().keys({
      streetAddress: Joi.string().required(),
      additionalAddressLine: Joi.string().allow(''),
      city: Joi.string().required(),
      region: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }),
    others: Joi.string().allow(''),
  }),
};
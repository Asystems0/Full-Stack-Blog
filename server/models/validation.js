const Joi = require("@hapi/joi");

const postValidation = (data) => {
  const schema = Joi.object({
    // id: Joi.number().required().messages({
    //   "number.empty": `Id cannot be an empty field`,
    //   "number.required": `Id is a required field`,
    // }),
    title: Joi.string().required().min(3).max(40).messages({
      "string.empty": `Title cannot be an empty field`,
      "string.min": `Title should have a minimum length of 3 characters`,
      "any.required": `Title is a required field`,
    }),
    body: Joi.string().required().min(10).max(4096).messages({
      "string.empty": `Body cannot be an empty field`,
      "string.min": `Body should have a minimum length of 10 characters`,
      "any.required": `Body is a required field`,
    }),
    datetime: Joi.allow(null),
  });
  console.log(schema.validate(data));
  return schema.validate(data);
};

module.exports.postValidation = postValidation;

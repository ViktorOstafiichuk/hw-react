import Joi from "joi";

const carValidator = Joi.object({
        model:Joi.string().regex(/^[a-zA-ZА-Яа-яіІїЇєЄґҐ]{2,20}$/).required().messages({
            'string.pattern.base':'тільки букви, мін 2символи макс 20символів'
        }),
        price:Joi.number().min(0).max(1000000).required(),
        year:Joi.number().min(1990).max(new Date().getFullYear()).required()
    });

export {carValidator};

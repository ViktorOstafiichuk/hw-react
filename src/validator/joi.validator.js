import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яІіЇїЄєҐґ]{2,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мін 1 символ максимум 20 символів'
    }),
    surname: Joi.string().regex(/^[a-zA-ZА-яІіЇїЄєҐґ]{2,3}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мін 1 символ максимум 3 символів'
    }),
    email: Joi.string().regex(/^[a-zA-ZА-яІіЇїЄєҐґ]{2,100}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мін 1 символ максимум 100' +
            ' символів'
    }),
});

export {userValidator}

import Joi from "joi-browser";
const schema = {
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Nombre: No debe estar vacio";
            break;
          case "any.base":
            err.message = "Nombre: No tiene un formato valido";
            break;
          case "any.empty":
            err.message = "Nombre: No debe estar vacio";
            break;
          case "string.min":
            err.message = `Nombre: Debe tener al menos ${err.context.limit} caracteres.`;
            break;
          case "string.max":
            err.message = `Nombre: Debe tener como mucho ${err.context.limit} caracteres.`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  last_name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Apellido: No debe estar vacio";
            break;
          case "any.base":
            err.message = "Nombre: No tiene un formato valido";
            break;
          case "any.empty":
            err.message = "Apellido: No debe estar vacio";
            break;
          case "string.min":
            err.message = `Apellido: Debe tener al menos ${err.context.limit} caracteres.`;
            break;
          case "string.max":
            err.message = `Apellido: Debe tener como mucho ${err.context.limit} caracteres.`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  country: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Seleccion un país";
            break;
          case "any.empty":
            err.message = "Seleccion un país";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  province: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Seleccion una provincia";
            break;
          case "any.empty":
            err.message = "Seleccion una provincia";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  phone: Joi.number()
    .integer()
    .max(9999999999)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Telefono: No debe estar vacio";
            break;
          case "number.base":
            err.message = "Telefono: No tiene un formato valido";
            break;
          case "any.empty":
            err.message = "Telefono: No debe estar vacio";
            break;
          case "number.max":
            err.message = `Telefono: Debe tener como mucho ${err.context.limit} caracteres.`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  mail: Joi.string()
    .email({
      minDomainSegments: 1,
      tlds: { allow: ["com", "ar"] },
    })
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Email: Es obligatorio";
            break;
          case "any.base":
            err.message = "Nombre: No tiene un formato valido";
            break;
          case "any.empty":
            err.message = "Email: No debe estar vacio";
            break;
          case "string.email":
            err.message = "Email: debe tener un formato valido";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  password: Joi.string()
    .required()
    .alphanum()
    .min(6)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Contraseña: No debe estar vacio";
            break;
          case "any.base":
            err.message = "Nombre: No tiene un formato valido";
            break;
          case "any.empty":
            err.message = "Contraseña: No debe estar vacio";
            break;
          case "string.min":
            err.message = `Contraseña: Debe tener al menos ${err.context.limit} caracteres.`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  confirmPassword: Joi.string()
    .required()
    .alphanum()
    .valid(Joi.ref("password"))
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "Confirmar contraseña: No debe estar vacio";
            break;
          case "any.base":
            err.message = "Las contraseñas no coinciden";
            break;
          case "string.alphanum":
            err.message = "Las contraseñas no coinciden";
            break;
          case "any.empty":
            err.message = "Confirmar contraseña: No debe estar vacio";
            break;
          case "any.allowOnly":
            err.message = "Las contraseñas no coinciden";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  terminos: Joi.boolean()
    .invalid(false)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message =
              "Debe estar de acuerdo con los Terminos y Condiciones";
            break;
          case "any.invalid":
            err.message =
              "Debe estar de acuerdo con los Terminos y Condiciones";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
};

export default schema;

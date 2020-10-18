const router = require("express").Router();
const UserControllers = require("../../controllers/UserControllers");
const { User } = require("../../models/index");
const { check } = require("express-validator");
const { checkToken } = require('../../middleswares/checkToken');

router.post(
  "/registro",
  [
    check("usuario", "El usuario es obligatorio")
      .not()
      .isEmpty()
      .isLength({ max: 31 })
      .withMessage("El maximo de caracteres del usuario es de 30")
      .bail()
      .trim()
      .custom(async (value) => {
        const existe = await User.findOne({ where: { usuario: value } });
        if (existe) {
          throw new Error("El usuario ya se encuentra registrado en la DB");
        }
      }),
    check('nombres', 'El nombre es obligatorio')
    .not()
    .isEmpty()
    .isLength({max:151})
    .withMessage('El maximo de caracteres del nombre es de 150')
    .trim(),  

    check('apellidos', 'El apellido es obligatorio')
    .not()
    .isEmpty()
    .isLength({max:151})
    .withMessage('El maximo de caracteres del apellido es de 150')
    .trim(),  

    check('cedula', 'La cédula es obligatoria')
    .not()
    .isEmpty()
    .isLength({max:8})
    .withMessage('El maximo de caracteres de la cedula es de 7')
    .trim(),  
    check("password", "El password es obligatorio")
      .not()
      .isEmpty()
      .trim()
      .isLength({ max: 101 })
      .withMessage("El numero de caracteres maximo es de 100"),
    check("email", "El email es obligatorio").isEmail(),
  ],
  UserControllers.Registro
);

router.post(
  "/login",
  [
    check("usuario", "El usuario es obligatorio")
      .not()
      .isEmpty()
      .isLength({ max: 31 })
      .withMessage("El maximo de caracteres es de 30")
      .bail()
      .custom(async (value) => {
        const existe = await UserControllers.UsuarioEspecifico(value)
        if (!existe) {
          throw new Error(`El usuario ${value} no existe en nuestra DATA`);
        }
      }),
    check("password", "La clave es obligatoria")
      .not()
      .isEmpty()
      .isLength({ max: 101 })
      .withMessage("El numero de caracteres maximo es de 100"),
  ],
  UserControllers.Login
);


router.get('/informacion', checkToken , UserControllers.DatosUsuarioActivo)

module.exports = router;

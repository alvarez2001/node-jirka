const router = require("express").Router();
const EgresosControllers = require("../../controllers/EgresosControllers");
const { DatosPartidaExistente } = require("../../controllers/PartidasControllers");
const { check } = require("express-validator");


router.post('/registrar/egreso',[
    check('egresos','El array de egresos es obligatorio')
    .isArray({min:1})
    .withMessage('Debe ser un array valido y que contenga minimo 1 egreso para registrar'),
    check('egresos.*.descripcion', 'La descripción del egreso es obligatorio')
    .not()
    .isEmpty()
    .trim()
    .isLength({max:255})
    .withMessage('El maximo de caracteres para la descripción es de 250'),

    check('egresos.*.total', 'El total del egreso es obligatoria')
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage('El total es un campo númerico'),

    check('egresos.*.tasa', 'La tasa del egreso es obligatoria')
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage('La tasa es un campo númerico'),

    check('egresos.*.fecha', 'La fecha es obligatoria')
    .not()
    .isEmpty()
    .isDate()
    .withMessage('La fecha debe ser valida'),

    check('egresos.*.partida', 'La partida es obligatoria')
    .not()
    .isEmpty()
    .isInt()
    .withMessage('La partida solo recibe campos numericos validos')
    .bail()
    .custom(async (value) => {

        const id = parseInt(value);
        if(!isNaN(id)){
        const existeId = await DatosPartidaExistente(id)
        
            if(!existeId) {
                throw new Error("La partida que ingreso no existe en nuestra DATA");
            }
        }else{
        throw new Error('La partida no esta recibiendo un campo numerico')
        }
    })

],EgresosControllers.RegistrarEgreso);


module.exports = router;

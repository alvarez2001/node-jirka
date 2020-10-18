const router = require("express").Router();
const PartidasControllers = require("../../controllers/PartidasControllers");
const { check } = require("express-validator");


router.post('/nueva',[
    check('nombre', 'El nombre de la partida es obligatorio')
    .not()
    .isEmpty()
    .isLength({max:255})
    .withMessage('El maximo de caracteres para el nombre de la partida es de 250')
    .bail()
    .custom(async (value) => {
        const existe = await PartidasControllers.PartidaExistente(value)
        if (existe) {
          throw new Error("La nombre de la partida ya existe en nuestra DATA");
        }
      })
],PartidasControllers.nuevaPartida);

router.put('/:id/actualizar',[
  check('nombre', 'El nombre de la partida es obligatorio')
  .not()
  .isEmpty()
  .isLength({max:255})
  .withMessage('El maximo de caracteres para el nombre de la partida es de 250')
  .bail()
  .custom(async (value, { req }) => {

    const id = parseInt(req.params.id);
    if(!isNaN(id)){
      const existeId = await PartidasControllers.DatosPartidaExistente(id)
      if(existeId) {
        const existe = await PartidasControllers.PartidaExistente(value)
        if (existe) {
          throw new Error("La nombre de la partida ya existe en nuestra DATA");
        }
      }else{
        throw new Error("La id que trata de actualizar no existe");
      }
    }else{
      throw new Error('La id de la partida que trata de actualizar no es un numero')
    }
    })
],PartidasControllers.ActualizarPartida);

router.delete('/:id/eliminar', PartidasControllers.EliminarPartida )

router.get('/',PartidasControllers.TodasLasPartidas);


module.exports = router;

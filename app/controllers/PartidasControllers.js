const { Partida } = require("../models/index");
const { validationResult } = require("express-validator");


const PartidaExistente = async (value) => {
    const partida = await Partida.findOne({ where: { nombre: value } });
    return partida
}

const DatosPartidaExistente = async (value)=>{
    const partida = await Partida.findByPk(value);
    return partida
}

module.exports = {
    DatosPartidaExistente,

    PartidaExistente,
    async nuevaPartida(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(406).json({ errores: errors.array() });
        }

        const newPartida = await Partida.create({
            nombre:req.body.nombre
        })

        res.json(newPartida)
    },

    async TodasLasPartidas(req,res){
        const partidas = await Partida.findAll();
        return res.json(partidas)
    },

    async ActualizarPartida(req,res){

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(406).json({ errores: errors.array() });
        }

        const id = parseInt(req.params.id);

        if(!isNaN(id)){
            const partidas = await Partida.update({nombre:req.body.nombre},{
                where:{
                    id:id
                }
            });
            if(partidas[0]){
                return res.json({msg:'Se ha actualizado la partida correctamente'})
            }
        }
        else{
            return res.json({errores:{msg:'El id de partida que trata de actualizar no es un numero'}})
        }

        return res.status(422).json({errores:{msg:'error del sistema'}})

    },

    async EliminarPartida(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(406).json({ errores: errors.array() });
        }

        const id = parseInt(req.params.id);

        const existePartida = await DatosPartidaExistente(id)

        if(existePartida){
            if(!isNaN(id) ){
                const eliminarPartida = await Partida.destroy({
                    where:{
                        id:req.params.id
                    }
                });
        
                if(eliminarPartida){
                    return res.json({msg:'Se ha eliminado exitosamente la partida'});
                }else{
                    return res.status(422).json({errores:{msg:'Ha ocurrido un error a la hora de eliminar la partida'}})    
                }
            }else{
                return res.status(422).json({errores:{msg:'El ID de la partida que trata de eliminar no es un numero'}})
            }
        }else{
            return res.status(422).json({errores:{msg:'La partida que esta tratando de eliminar no existe'}})
        }

        
    }



};



/*

fecha 
total 
descripción
tasa
partidaId


*/
const { Egreso } = require("../models/index");
const { validationResult } = require("express-validator");
const { sequelize } = require('../models/index');


module.exports = {
    async RegistrarEgreso(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(406).json({ errores: errors.array() });
        }

        const egresosParaRegistrar = req.body.egresos;        
        const datos = [];
    
        try {
                
            const result = await sequelize.transaction( async (t) => {
                    for (let i = 0; i < egresosParaRegistrar.length; i++) {
                        
                        const egresoRegistrado = await Egreso.create({
                            fecha: egresosParaRegistrar[i].fecha,
                            total: parseFloat(egresosParaRegistrar[i].total).toFixed(2),
                            descripcion: egresosParaRegistrar[i].descripcion,
                            tasa: parseFloat(egresosParaRegistrar[i].tasa).toFixed(2),
                            partida_id:egresosParaRegistrar[i].partida
                        },{transaction:t});
                        datos.push(egresoRegistrado)
                    }
            })

            return res.json({success: 'Egresos registrados correctamente', datas:datos});   
          } catch (error) {      

            return res.status(406).json({errores:{msg:'Ha ocurrido un error al guardar los egresos', error:error}})
          }
        
    
    },
    /*async ActualizarEgreso(req,res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(406).json({ errores: errors.array() });
        }

        const EgresoActualizar = await Egreso.update({
            fecha: req.body.fecha,
            descripcion: req.body.descripcion,
            tasa: parseFloat(req.body.tasa).toFixed(2),
        });

        if(EgresoActualizar[0]){
            return res.json({success: 'Egresos actualizado correctamente'});   
        }

        return res.status(406).json({errores:{msg:'Ha ocurrido un error al actualizar el egreso'}})


    }*/
};

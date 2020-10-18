const jwt = require('jwt-simple');

const checkToken = (req,res,next) => {
    const userToken = req.headers['user-token'];
    if(!userToken){
        return res.status(401).json({errores:{msg:'No se encuentra logueado en el sistema'}});
    }

    let payload = {};

    try{
        payload = jwt.decode(userToken,'userSecret')
    }catch(error){
        return res.status(401).json({errores:{msg:'El token es incorrecto'}});
    }

    if(payload.expiredAt < new Date().getTime()){
        return res.status(401).json({errores:{msg:'El token ha expirado'}});
    }




    req.usuarioId = payload.userId;


    next();
}

module.exports = {
    checkToken
}
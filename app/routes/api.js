const router = require('express').Router();
const { checkToken } = require('../middleswares/checkToken');
const apiUser = require('./api/user');
const apiPartidas = require('./api/partidas');
const apiEgresos = require('./api/egresos');


router.use('/usuarios', apiUser);
router.use('/partidas', checkToken ,apiPartidas),
router.use('/egresos' , checkToken ,apiEgresos),


module.exports = router;
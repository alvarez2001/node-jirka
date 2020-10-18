const { User } = require("../models/index");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");



const createToken = (user) => {
  const hora = new Date();
  const payload = {
    userId: user.id,
    createAt: hora.getTime(),
    expiredAt: hora.setMinutes(hora.getMinutes()+ 40),
  };

  return jwt.encode(payload, "userSecret");
};


const userEspecifico = async (usuario) => {
  const user =  await User.findOne({where:{usuario:usuario}})
  return user
}

module.exports = {
  async getAll(req, res) {
    const user = await User.findAll();
    res.json(user);
  },

  async UsuarioEspecifico(usuario){
    return await userEspecifico(usuario);
  },
  //DATA USUARIO
  async DatosUsuarioActivo(req,res){
    const idUsuario = req.usuarioId
    const usuario = await User.findByPk(idUsuario, {
      attributes:['id','nombres','apellidos','cedula','email','nacimiento']
    });

    res.json(usuario)

  },


    //REGISTRO
  async Registro(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ errores: errors.array() });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await User.create({
      password: req.body.password,
      usuario: req.body.usuario,
      email: req.body.email,
      nombres:req.body.nombres,
      apellidos:req.body.apellidos,
      cedula:req.body.cedula,
      nacimiento:req.body.nacimiento
    });
    res.json(newUser);
  },


    //LOGIN
  async Login(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ errores: errors.array() });
    }

    const user = await userEspecifico(req.body.usuario)

    if (user) {
      const iguales = bcrypt.compareSync(req.body.password, user.password);
      if (iguales) {
        res.json({ success: createToken(user) });
      } else {
        res.status(406).json({ errores: [{ msg: "Contraseña incorrecta" }] });
      }
    } else {
      res.status(406).json({
        errores: [{ msg: "El usuario ingresado no existe en nuestra DATA" }],
      });
    }
  },
};

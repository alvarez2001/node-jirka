const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

app.use('/api',require('./routes/api'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor en el port 3000');

    //sequelize.authenticate().then(()=>{  no lo coloco ya que el timestamp me toca hacerlo manualmente
    sequelize.sync({force:false}).then(()=>{
        console.log('conexion realizada exitosamente');
    })
})
'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const users = [
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      },
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      },
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      },
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      },
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      },
      {
        usuario:faker.name.firstName()+new Date().getMilliseconds(),
        password:'$2a$10$W/.lue5SBpmMBu2hxeY9meWJJcqywR3g/2x40zLdjw5dB3lUekSBG',
        email:'josemiguelalvarez2014@gmail.com',
        nombres:faker.name.firstName(),
        apellidos:faker.name.lastName(),
        cedula:'28251308',
        nacimiento:'2001/10/18'
      }
    ];


    
      await queryInterface.bulkInsert('users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};

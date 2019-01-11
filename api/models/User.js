/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcryptjs');

module.exports = {

  tableName: 'users',

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
      required: true,
      maxLength: 200
    },

    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      minLength: 6,
      required: true
    },

    isVendor: {
      type: 'boolean',
      defaultsTo: false
    },
  },

  customToJSON: function () {
    return _.omit(this, ['password'])
  },

  beforeCreate: (values, callback) => {
    bcrypt.hash(values.password, 10, (err, hash) => {
      if (err) callback(err)
      values.password = hash
      callback()
    })
  },

  
  comparePassword: (password, user) => bcrypt.compare(password, user.password)


};


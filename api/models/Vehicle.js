/**
 * Vehicle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {



    // Breakdown: { type: 'string' },
    //many many
    owner: { 
      collection: 'user',
      via : 'vehicles'
    
    },
    VehicleType : {
      type : 'string',
      required : true
    },
    ModelName : {
      type : 'string',
      required : true
    },
    LicenseNumber : {
      type : 'string',
      required : true
    }

  },

};


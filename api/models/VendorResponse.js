/**
 * VendorResponse.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    breakdown: {
      collection:'breakdown',
      via: 'approval'
    },
    TakingAction : {
      type : 'boolean',
      required : true
    },
    MechanicName : {
      type : 'string',
    },
    MechanicPhone : {
      type : 'string'
    }
  },

};


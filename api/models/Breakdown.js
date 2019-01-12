/**
 * Breakdown.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    approval:{
      model:'VendorResponse',
      unique: true
    },
    ProblemType : {
      type : 'string',
      required : true
    },
    Location : {
      type : 'string',
      required : true
    }
  },

};


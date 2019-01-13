/**
 * BreakdownController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
 
    create: async (req, res) => {
      if (!req.isSocket) return res.badRequest();


      sails.sockets.join(req, 'vendors');

      sails.sockets.broadcast('vendors', 'hello', { howdy: 'hi there!'}, req);
      return res.ok()
  }
};


/**
 * BreakdownController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create : async (req, res) => {
      let breakdown = await Breakdown.create(req.body).fetch()
      return res.send({breakdown})
  }
};


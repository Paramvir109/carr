/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    create: async (req, res) => {
        let user = await User.create(req.body).fetch();
        res.send(user);
        
    },

};





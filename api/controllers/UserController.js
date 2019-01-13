/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    create: async (req, res) => {
        let emailValidation = await User.findOne({email: req.body.email})

        if (emailValidation) return ResponseService.json(409, res, 'User already exist')

        let newUser = await User.create(req.body).fetch()
        let data = {
            user: newUser,
            token: JwtService.issue({id: newUser.id})
        }
        return ResponseService.json(201, res, 'User created', data)
    },
    me: async (req, res) => {
        // res.send(req.me)
        return ResponseService.json(200, res, 'me', req.me, true)
    },

};





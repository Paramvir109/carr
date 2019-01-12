/**
 * VehicleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create : async (req, res) => {
        let vehicle = req.body
        let createdVehicle = await Vehicle.create(vehicle).fetch()
        res.send(createdVehicle)
    },

    addVehicle : async (req, res) => {
        await User.addToCollection(req.me.id, 'vehicles').members([req.body.id]);
        res.ok()
    },
    getVehicles : async(req, res) => {
        let query = await User.findOne(req.me.id).populate('vehicles')
        return res.send({query})
    },
    remove : async (req, res) => {
       let vehicle = await User.removeFromCollection(req.me.id, 'vehicles').members([req.body.id]);
       return res.send(200, 'OK')
    }
};


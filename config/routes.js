/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'POST /signup': 'UserController.create',
    'POST /signin': 'AuthController.signin',
    'GET /dashboard': 'HomeController.dashboard',
    'GET /me': 'UserController.me',
    'POST /vehicle' : 'VehicleController.create',
    'POST /user/vehicle/add' : 'VehicleController.addVehicle',
    'DELETE /user/vehicle/remove' : 'VehicleController.remove',
    'GET /user/vehicle/get' : 'VehicleController.getVehicles',
    'POST /breakdown': 'BreakdownCotroller.create',
    'GET /me/vehicles': 'VehicleController.index',

    


};

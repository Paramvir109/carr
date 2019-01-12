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
    'POST /login': 'AuthController.login',
    'GET /dashboard': 'HomeController.dashboard',
    'POST /user/vehicle/add' : 'VehicleController.addVehicle',
    'POST /test' : 'VehicleController.create',
    'DELETE /user/vehicle/remove' : 'VehicleController.remove',
    'GET /user/vehicle/get' : 'VehicleController.getVehicles',
    'POST /user/vehicle/breakdown' : 'BreakdownController.create'
    


};

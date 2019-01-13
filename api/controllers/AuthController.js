/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    signin: async (req, res) => {
        const email = req.body.email
        const password = req.body.password

        let validated = await validate(res, email, password)
        if(validated) login(res, email, password)
    }

};


let validate = (res, email, password) => {
    if (!email) return ResponseService.json(401, res, 'Email is required')
    if (!password) return ResponseService.json(401, res, 'Password is required')
    return true
}

let login = async (res, email, password) => {
    let user = await User.findOne({ email: email })
    if (!user) return ResponseService.json(404, res, 'User not found')

    let credentialsAreTrue = await User.comparePassword(password, user)
    if(credentialsAreTrue === false) return ResponseService.json(200, res, 'Password is incorrect', null, false)
    
    let data = { jwt: JwtService.issue({ id: user.id }) }
    return ResponseService.json(200, res, 'Logged in', data, true)
}

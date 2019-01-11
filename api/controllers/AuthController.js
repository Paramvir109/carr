/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async (req, res) => {
        const email = req.body.email
        const password = req.body.password

        let validated = await validate(res, email, password)
        if(validated === true) login(res, email, password)
    }

};


let validate = (res, email, password) => {
    if (!email) return res.send('email is required');
    if (!password) return res.send('Password is required');
    return true
}

let login = async (res, email, password) => {
    let user = await User.findOne({ email: email })
    if (!user) return res.send('User not found')

    let credentialsAreTrue = await User.comparePassword(password, user)
    if(credentialsAreTrue === false) return res.send('Password is incorrect')
    
    let data = { jwt: JwtService.issue({ id: user.id }) }
    return res.send(data)
}

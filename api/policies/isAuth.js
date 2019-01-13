module.exports = (req, res, next) => {
    let token;
    
    if (req.headers && req.headers.authorization) {
        let parts = req.headers.authorization.split(' ')
        if (parts.length === 2) {
            let schema = parts[0],
                credentials = parts[1];
            if (/^Bearer$/i.test(schema)) {
                token = credentials;
            }
        }
        else {
            return res.json('wrong format')
        }
    }

    // if (req.param('token')) 
    // {
    //     token = req.param('token')
        
    //     JwtService.verify(token, (err, decoded) => {
    //         if (err) return res.json(err)
    //         req.token = token
    //         User.findOne({ id: decoded.id }).then(user => {
    //             req.me = user
    //             next()
    //         })
    //     })
    // } else {
    //     return res.json('Error')
    // }

    JwtService.verify(token, (err, decoded) => {
        if (err) return res.json(err)
        req.token = token
        User.findOne({ id: decoded.id }).then(user => {
            req.me = user
            next()
        })
    })
};
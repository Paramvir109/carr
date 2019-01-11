module.exports = (req, res, next) => {
    if (req.me.isVendor == true) next()
    else return res.send('not vendor')
}
module.exports = (req, res, next) => {
   if(req.me.isActive) next();
    else {
        res.send({
            'message' : 'NA'
        })
    }
};
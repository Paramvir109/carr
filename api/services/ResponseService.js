module.exports = {
    json: (status, res, message, data, success, meta) => {
        let response = {
            response: {
                message: message,
            }
        }

        if (typeof data !== undefined) response.response.data = data
        if (typeof meta !== undefined) response.response.meta = meta
        if (typeof success !== undefined) response.response.success = success

        return res.status(status).json(response)
    }
};

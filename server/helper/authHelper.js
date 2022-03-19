

function jwtVerify(req, res, next) {
    try {
        let token = req.cookies.JWT

        let isLoggedIn = jwt.verify(token, process.env.JWT_SECRET)
        if (req.body != {} && isLoggedIn) {
            req.body.user = isLoggedIn.payload;
            next()
        }
        else if (isLoggedIn) {
            req.body = isLoggedIn
            next();
        } else {
            throw new Error
        }

    } catch (error) {
        res.status(400).json("Unauthorised access is not permited")
    }

}

module.exports = { jwtVerify }
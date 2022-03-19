require('dotenv').config();


function jwtVerify(req, res, next) {
    // console.log(token)
    try {
        let token = req.cookies.JWT

        let isLoggedIn = jwt.verify(token, process.env.JWT_SECRET)
        if (isLoggedIn) {
            next();
        }
        else {
            throw new Error
        }

    } catch (error) {
        res.status(400).json("Unauthorised access is not permited")
    }

}

module.exports = { jwtVerify }
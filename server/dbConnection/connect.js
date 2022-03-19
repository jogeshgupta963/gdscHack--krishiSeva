const mongoose = require('mongoose');

function connect(url) {
    try {
        return mongoose.connect(url)
    } catch (err) {
        console.log(err.message);
    }
}
module.exports = connect
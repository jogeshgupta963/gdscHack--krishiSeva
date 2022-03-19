const mongoose = require('mongoose');

function connect(url) {
    try {
        return mongoose.connect(url, {
            newUrlParser: true,
            newUnifiedTopology: true
        })
    } catch (err) {
        console.log(err.message);
    }
}
module.exports = connect
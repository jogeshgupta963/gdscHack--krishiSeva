const express = require('express')


//functions

const connect = require('./server/dbConnection/connect')
const app = express();


app.use(express.json());

//routers


//db connection 


(async function () {
    try {
        await connect(process.env.mongoUri)
        console.log('db connected')
        app.listen(process.env.port || 3000, () => { console.log('server started') })
    } catch (err) {
        console.log(err.message)
    }
})();

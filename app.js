const express = require('express')
require('dotenv').config();

//functions

const connect = require('./server/dbConnection/connect')
const app = express();


app.use(express.json());

app.use("/css", express.static(__dirname + "/client/components/css"))
app.use("/img", express.static(__dirname + "/client/images"))
//routers
const userRouter = require('./server/routers/user.js')
const farmerRouter = require('./server/routers/farmer.js')

app.use('/api/v1/user', userRouter)
app.use('/api/v1/farmer', farmerRouter);

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

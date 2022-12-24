require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const port = process.env.PORT || 3005
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/api', router)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is runing on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
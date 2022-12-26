require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const port = process.env.PORT || 3005
const app = express()

app.use(express.json())
app.use(session({
    secret: 'some_secret',
    cookie: { maxAge: 86400000, sameSite: 'lax' },
}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use('/api', router)
app.use(cookieParser())


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
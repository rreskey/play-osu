const express = require('express')
const app = express()
const cors = require('cors')
const port = 3002

app.use(cors({origin:"http://127.0.0.1:5173",credentials: true}));

app.post('/', (req, res) =>{
    if (req.method === 'OPTIONS') {
        res.send();
        return;
    }
})

app.listen(port, 'localhost', ()=>{
    console.log(`Server is runing on port ${port}`)
})

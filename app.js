const express = require('express')

const app = express()

const userRouter = require('./users/users.router')

// habilitan el recibir datos en formato JSON
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server OK!!'
    })
})

app.use('/', userRouter)

app.listen(8000, () =>{
    console.log('server started at port 8000');
})
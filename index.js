const express = require("express")
const app = express()

const hostname = '127.0.0.1'
const port = 3000

const userroute = require('./routes/notesRouter')

app.use('/user', userroute)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
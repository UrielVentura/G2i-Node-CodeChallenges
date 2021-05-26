const express = require('express')

const app = express()
const port = 3001

const acronymRouters = require('./app/routes/acronym')

app.use(acronymRouters)

app.listen(port, () => {
    console.log('The application is Online');
})
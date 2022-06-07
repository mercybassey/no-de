const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json([
        {
            name: 'Mercy',
            location: 'Accra'
        },
        {
            name: 'Mario',
            location: 'Los Angeles'
        },
        {
            name: 'Jane',
            location: 'San Fransisco'
        },
        {
            name: 'John',
            location: 'Canada'
        },
        {
            name: 'Brad',
            location: 'Mexico'
        }
    ])
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
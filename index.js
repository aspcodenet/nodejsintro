const express = require('express')
const app = express()
const port = 3000

const {getAllPlayers} = require('./models/index.js')

app.get('/contact', (req, res) => {
    res.send('Don’t contact us at all!')
})

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hej</h1><b>hopp</b><ul><li></li></ul></body></html>')
})

app.get('/players', (req, res) => {
    const a = getAllPlayers()
    res.json(a)
})
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
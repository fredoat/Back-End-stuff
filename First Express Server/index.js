const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/cats', (req, res) => {
    res.send("MOEWWW!!")
})
app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
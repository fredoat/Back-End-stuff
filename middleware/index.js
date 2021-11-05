const express = require('express')
const app = express()
const morgan = require('morgan')
const AppError = require('./AppError')

/*
app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Data.now();
    console.log(req.method, req.path)
    next();
})
app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!!')
    next();
})
*/

const verify = (req, res, next) => {
    const { password } = req.query
    if (password === 'enter') {
        next()
    }
    throw new AppError('password is required', 401)

}

app.get('/secrets', verify, (req, res, next) => {
    res.send('my secret is that sometimes i eat all the food at home even when im not hungry')

})


app.get('/', (req, res) => {
    res.send('home page')
})
app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE : ${req.requestTime}`)
    res.send('woof woof')
    next()
})



app.listen(3000, () => {
    console.log('App is running on local host 3000')
})
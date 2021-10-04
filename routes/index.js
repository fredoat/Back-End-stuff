const express = require('express');
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Bradey',
        comment: 'I like to go bird watching with my dog'

    },
    {
        id: uuid(),
        username: 'Cisco',
        comment: 'I love the fact that no one was hurt at the end'

    },
    {
        id: uuid(),
        username: 'Francis',
        comment: 'Please delete your account Todd'

    },
    {
        id: uuid(),
        username: 'Sniperwolf',
        comment: 'yessirski you know the vibe'

    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments })
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

//app.listen(3000, () => {
   // console.log('Listening on port 3000')
//})




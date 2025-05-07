const express = require('express')
const { handler } = require('./controller')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.post('/', async (req, res) => {
    console.log(req.body)
    res.send(await handler(req))
})

app.get('/', async (req, res) => {
    res.send(await handler(req))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

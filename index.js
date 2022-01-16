const foods = require('./foods.json')
const app = require('express')()

app.get('/', (req, res) => {
    res.send('<h1>Express App</h1>')
})

app.get('/foods', (req, res) => {
    res.json(foods)
})

const PORT = process.env.PORT || 80
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
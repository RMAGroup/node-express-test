const app = require('express')()
const cors = require('cors')

const foods = require('./foods.json')
const cars = require('./cars.json')

app.use(cors('*'))

app.get('/', (req, res) => {
    res.send('<h1>Express App</h1>')
})

app.get('/foods', (req, res) => {
    res.json(foods)
})

app.get('/cars', (req, res) => {
    res.json(cars)
})



const PORT = process.env.PORT || 80
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
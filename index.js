/*

1. required / mport in http server framework
1. create new instance of express
2. add endpoints / routing / api
3. configure port to listen on
4. start server 

*/

const app = require('express')()

app.get('/', (req, res) => {
    res.send('<h1>Express App</h1>')
})

const PORT = process.env.PORT || 80
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
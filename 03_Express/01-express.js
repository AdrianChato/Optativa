const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.send('Hello brother')
})

app.get('/contacto', (req, res) => {
    console.log(__dirname)
    res.send('Vamos con el contacto')
})

app.get('/about_us', (req, res) => {
    console.log(__dirname)
    res.send('Sobre mi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
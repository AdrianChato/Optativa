const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use('views', express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

/*
app.use((req,res) => {
    res.status(404).sendFile(__dirname + "/public/html/404.html")
})
*/
app.get('/pruebas', (req, res) => {
  res.render("pruebas",{titulo:"Viva españa", descripcion:"descripcion js funcionando"})
})

app.get('/pruebas2', (req, res) => {
  res.render("pruebas2",{titulo:"Viva españa 2", descripcion:"descripcion js funcionando 2"})
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

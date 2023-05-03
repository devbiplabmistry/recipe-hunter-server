const express = require('express')
const app = express()
const cors = require('cors')
const chefInfo =require('./data/chefInformation.json');
const recipee =require('./data/chefRecipees.json');
const port = 5000

app.get('/chef', (req, res) => {
  res.send(chefInfo)
})
app.get('/recipee', (req, res) => {
  res.send(recipee)
})
app.get('/recipee', (req, res) => {
  res.send(recipee)
})
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
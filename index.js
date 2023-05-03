const express = require('express')
const app = express()
const chefInfo =require('./data/chefInformation.json');
const recipee =require('./data/chefRecipees.json');
const port = 5000
const cors = require('cors')
app.use(cors())

app.get('/chef', (req, res) => {
  res.send(chefInfo)
})
app.get('/recipee', (req, res) => {
  res.send(recipee)
})
app.get('/recipee/:id', (req, res) => {
  const id =req.params.id;
  const selectedRecipee = recipee.find(r => r._id === id)
  res.send(selectedRecipee)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
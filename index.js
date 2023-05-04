const express = require('express')
const app = express()

const chefInfo =require('./data/chefInformation.json');
const recipe =require('./data/chefRecipees.json');
const cors = require('cors')
const port = 5000



app.use(cors())

app.get('/chef', (req, res) => {
  res.send(chefInfo)
})
app.get('/recipee', (req, res) => {
  res.send(recipe)
})
app.get('/recipee/:id', (req, res) => {
  const id =req.params.id;
  const selectedRecipee = recipe.find(r => r._id === id)
  res.send(selectedRecipee)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
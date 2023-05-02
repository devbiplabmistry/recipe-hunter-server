const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
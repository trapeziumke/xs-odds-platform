
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    app: 'XS Odds API',
    status: 'running'
  })
})

app.listen(5000, () => {
  console.log('XS Odds Backend Running')
})

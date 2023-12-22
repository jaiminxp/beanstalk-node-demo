const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Elastic Beanstalk Node.js App!',
  })
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})

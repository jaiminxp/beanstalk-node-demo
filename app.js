const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to EB Node.js App!',
    usingCodeBuild: true,
  })
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})

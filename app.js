const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to EB Node.js App!',
    usingCodeBuild: true,
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

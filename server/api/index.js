const express = require('express')
const opencap = require('opencap')

// Create express instance
const app = express()

app.get('/query/:alias', async (req, res) => {
  console.log('Query:', req.params.alias)

  try {
    const address = await opencap.getAddresses(req.params.alias)
    res.status(200).send(address)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

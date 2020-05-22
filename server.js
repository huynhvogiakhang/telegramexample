const express = require('express')
const app = express()
const request = require('request')

app.get('/webhook', (req, res) => {
  request('https://gateway.chotot.com/v1/public/ad-listing?cg=1000&limit=20&st=s,k', (error, res, body) => {
    let x = JSON.parse(body)

  })
  res.send("ok")
})

app.listen(3000)
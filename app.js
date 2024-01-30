const express = require('express')
const app = express()

app.use(express.static('client'))

app.use(express.json())

const fs = require('fs')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const DataPath = 'data/data.json'

const Abilities = JSON.parse(fs.readFileSync(DataPath))

app.get('/Abilities/', function (request, response) {
  const Name = request.query.Name
  const Final = []
  for (const Ability of Abilities) {
    if (Ability.Abilities.includes(Name)) {
      Final.push(Ability.text)
    }
  }

  response.send(Final)
})

app.get('/load/', function (request, response) {
  const clickedID = request.query.clickedID
  const extractedAbilities = []

  for (const DataSet of Abilities) {
    if (DataSet.Abilities.includes(clickedID)) {
      extractedAbilities.push(DataSet.Abilities[0])
    }
  }
  response.send(extractedAbilities)
})

// Post method
app.post('/newdata', function (request, response) {
  try {
    const payload = request.body
    console.log(payload)

    const sentName = request.body['sub-name']
    const sentClass = request.body['sub-class']
    const sentAbility = request.body['sub-ability']

    const sentData = { text: sentAbility, Abilities: [sentName, sentClass] }
    Abilities.push(sentData)
    fs.writeFileSync(DataPath, JSON.stringify(Abilities))

    response.json({ success: true, data: sentData })
  } catch (e) {
    alert(e)
  }
})

module.exports = app

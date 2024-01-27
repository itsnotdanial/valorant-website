const express = require('express') ;
const app = express()

app.use(express.static('client'))

app.use(express.json())

const fs = require('fs')

//I HAVE NO IDEA WHY I NEED THIS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const DataPath = 'data/data.json'

const Abilities = JSON.parse(fs.readFileSync(DataPath));



app.get("/Abilities/", function(request, response) {
    let Name = request.query.Name
    let Final = []
    for (let Ability of Abilities){
        if(Ability.Names.includes(Name)){
            Final.push(Ability.text)   
        }
    }
    response.send(Final)
})

app.post("/newdata", function(request, response){
    const payload = request.body 
    console.log(payload)
    const sentName = request.body['sub-class'];
    const sentClass = request.body['sub-class'];
    const sentAbility = request.body['sub-ability'];

     const sentData = { text: sentAbility, Abilities: [sentName, sentClass] };

})


app.listen(6969);
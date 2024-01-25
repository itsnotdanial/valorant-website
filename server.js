const express = require('express') ;
const app = express()

app.use(express.static('client'))

//I HAVE NO IDEA WHY I NEED THIS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });



//Defining abilties for agents and their class
let Abilities = [ 
    {"text" : "Smoke, Updraft, Dash, Knives", "tags" : ["Reyna", "Duelist"]},
    {"text" : "Flash, Molitov, Wall, SecondLife", "tags" : ["Phoenix", "Duelist"]},
    {"text" : "Smoke, Flash, Step, Teleport", "tags" : ["Omen", "Controller"]},
    {"text" : "Suck, Stun, Smoke, Nebula", "tags" : ["Astra", "Controller"]},
    {"text" : "Cage, Trip, Camera, Reveal", "tags" : ["Cypher", "Sentinel"]},
    {"text" : "Recon, ShockDart, Drone, Hunter", "tags" : ["Sova", "Initiator"]}
]


app.get("/Abilities/", function(request, response) {
    let tag = request.query.tag
    let Final = []
    for (let Ability of Abilities){
        if(Ability.tags.includes(tag)){
            Final.push(Ability.text)   
        }
    }
    response.send(Final)
})


app.listen(6969);
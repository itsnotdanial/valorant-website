const express = require('express') ;
const app = express()



//Defining abilties for agents and their class
let Abilities = [ 
    {"text" : "Smoke, Updraft, Dash, Knives", "tags" : ["Jett", "Duelist"]},
    {"text" : "Flash, Molitov, Wall, SecondLife", "tags" : ["Phoenix", "Duelist"]},
    {"text" : "Smoke, Flash, Step, Teleport", "tags" : ["Omen", "Controller"]},
    {"text" : "Suck, Stun, Smoke, Nebula", "tags" : ["Astra", "Controller"]},
    {"text" : "Cage, Trip, Camera, Reveal", "tags" : ["Cypher", "Sentinel"]},
    {"text" : "Recon, ShockDart, Drone, Hunter", "tags" : ["Sova", "Initiator"]}
]


app.get("/Abilities/:tag", function(request, response) {
    let tag = request.params.tag
    let Final = []
    for (let Ability of Abilities){
        if(Ability.tags.includes(tag)){
            Final.push(Ability.text)   
        }
    }
    response.send(Final)
})


app.listen(6969);
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
            if(Ability.Abilities.includes(Name)){
            Final.push(Ability.text)   
            }
        }
 
        response.send(Final)
    })

//get method to return everything 
//app.get("/everything/", function(request, response){
  //  try  

//})

app.get("/load/", function(request, response){
  let clickedID = request.query.clickedID
  console.log(clickedID)
  const extractedAbilities = [];

  for (let DataSet of Abilities) {
    if(DataSet.Abilities.includes(clickedID)){
      extractedAbilities.push(DataSet.Abilities[0])
      console.log(extractedAbilities)
    }
  }
  response.send(extractedAbilities)

// Now extractedAbilities is an array of individual abilities associated with "Duelist"
console.log(extractedAbilities);
})


//need to add error handling?
app.post("/newdata", function(request, response){
    try { const payload = request.body 
        console.log(payload)

        const sentName = request.body['sub-name'];
        const sentClass = request.body['sub-class'];
        const sentAbility = request.body['sub-ability'];
        
        const sentData = { text: sentAbility, Abilities: [sentName, sentClass] };
        Abilities.push(sentData)
        fs.writeFileSync(DataPath, JSON.stringify(Abilities));

        
        response.json({ success: true, data: sentData });
    } catch(erorr) {
        console.erorr(error)
            response.status(500).json({ success: false, error: "Internal Server Error" });
    }

})


module.exports = app;
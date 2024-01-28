//const { error } = require("console");

let con = document.getElementById("form-duel");
//let all = document.getElementById("AllButton")

//https://softauthor.com/get-id-of-clicked-element-in-javascript/#get-id-of-clicked-element-using-parent-element
//const buttonGroup = document.getElementById("buttonGroup");
//const info = document.getElementById("info");

//JavaScript to find out which button is pressed
// From the options Duelist, Sentinels, Initiators, Controllers
//When a button is pressed the ID of that button is sent to the server
//The server then returns data which is then turned in bullet-points
//It is then returned to the neccessary container
const buttonGroupPressed = async(e) => { 
  
  const isButton = e.target.nodeName === 'BUTTON';
  
  if(!isButton) {
    return
  }
  let clickedID = e.target.id
  console.log(e.target.id);
  try {
    const response = await fetch('http://127.0.0.1:6969/load?clickedID='+ clickedID)
    if(response.ok){
      let placeholder = await response.json()
      //let texts = await response.text();
      let html = "<ul>\n";
      for(let place of placeholder){
        html += `<li>${place}</li>\n`;
      }
      html += "</ul>\n";
      document.getElementById(clickedID+"con").innerHTML = html 
    }else{
      alert("Error 404, check your connection")
    }
    }
    catch(e){
      alert(e)
    }
}
buttonGroup.addEventListener("click", buttonGroupPressed);



//not finished supposed to be for the return all
/*all.addEventListener('click', async function (event){
  event.preventDefault();
  try {
    let response = await fetch('http://127.0.0.1:6969/everything')
    if (response.ok){
      let txt = await response.text()
      console.log(returned)
      document.getElementById("container").innerHTML = txt 
  } 
      }
      catch(error) {
        alert(error)
      }
})*/

con.addEventListener('submit', async function(event){
  event.preventDefault();
  try{
    let Name = document.getElementById("in-Name").value;
    alert('http://127.0.0.1:6969/Abilities?Name='+Name)
    let response = await fetch('http://127.0.0.1:6969/Abilities?Name='+Name);
    if (response.ok) {
      //let txt = await response.text() ;
      //console.log(txt)
      let AbilityReturned = await response.json()
      //let texts = await response.text();
      let html = "<ul>\n";
      for(let temp of AbilityReturned){
        html += `<li>${temp}</li>\n`;
      }
      html += "</ul>\n";
      document.getElementById("container").innerHTML = html 
      
    }else{
          alert(error)
    }
  } catch(e) {
  alert("Sorry you have an error 404, please check your connection")
  }
})
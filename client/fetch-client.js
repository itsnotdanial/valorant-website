let con = document.getElementById("form-duel");
//let all = document.getElementById("AllButton")

//https://softauthor.com/get-id-of-clicked-element-in-javascript/#get-id-of-clicked-element-using-parent-element
//const buttonGroup = document.getElementById("buttonGroup");
//const info = document.getElementById("info");

/*
const buttonGroupPressed = async(e) => { 
  
  const isButton = e.target.nodeName === 'BUTTON';
  
  if(!isButton) {
    return
  }
  let clickedID = e.target.id
  console.log(e.target.id);
  try {
    const response = await fetch('http://127.0.0.1:6969/load')
    if(response.ok){
      let texts = await response.text 
      document.getElementById(clickedID+"con").innerHTML = texts 
    }else{
      alert("Error 404, check your connection")
    }
    }
    catch(error){
      alert(error)
    }
}
buttonGroup.addEventListener("click", buttonGroupPressed);
*/


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
      let txt = await response.text() ;
      console.log(txt)
      document.getElementById("container").innerHTML=txt;
    }else{
          alert("Error 4045555")
    }
  } catch(e) {
  console.log("Sorry you have an error")
  }
})
let DuelVar = document.getElementById("form-duel");

DuelVar.addEventListener('submit', async function(event){
  event.preventDefault();
  try{
    let tag = document.getElementById("in-tag").value;
    alert('http://127.0.0.1:6969/Abilities?tag='+tag)
    let response = await fetch('http://127.0.0.1:6969/Abilities?tag=' + tag);
    if (response.ok) {
      let txt = await response.text() ;
      console.log(txt)
      document.getElementById("duel-container").innerHTML=txt;
    }else{
          alert("Error 404")
    }
  } catch(e) {
  alert(e)
  }
})



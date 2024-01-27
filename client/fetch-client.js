let con = document.getElementById("form-duel");

con.addEventListener('submit', async function(event){
  event.preventDefault();
  try{
    let Name = document.getElementById("in-Name").value;
    alert('http://127.0.0.1:6969/Abilities?Name='+Name)
    let response = await fetch('http://127.0.0.1:6969/Abilities?Name=' + Name);
    if (response.ok) {
      let txt = await response.text() ;
      console.log(txt)
      document.getElementById("container").innerHTML=txt;
    }else{
          alert("Error 404")
    }
  } catch(e) {
  alert(e)
  }
})


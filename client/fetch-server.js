//retrieve data from the form and store it inside the 
// took this code from and modified it https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects

const form = document.getElementById("form-name")

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault()
    console.log(form)  
    const formData = new FormData(form);
    console.log(formData)
  
    const  payload = JSON.stringify(Object.fromEntries(formData.entries()))
    console.log(payload)
   
     const response = await fetch("http://127.0.0.1:6969/newdata", {
      method: "POST",
    // need to set headers to make sure the server knows to invoke the JSON parser
      headers: {
        "Content-Type": "application/json"
      },
      body: payload
    
  });
  console.log(await response.json());
  if (response.ok){
    document.getElementById("text-box").innerHTML = "Your submission was successful!"
  }
}
catch(error) {
  document.getElementById("text-box").innerHTML = "Sorry your submission was unsuccessful, perhaps you tried to enter a duplicate"
}
});
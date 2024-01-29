// retrieve data from the form and store it inside the
// took this code from and modified it https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects

const form = document.getElementById('form-name')

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault()
    const formData = new FormData(form)

    const payload = JSON.stringify(Object.fromEntries(formData.entries()))
    console.log(payload)

    const response = await fetch('http://127.0.0.1:6969/newdata', {
      method: 'POST',
      // need to set headers to make sure the server knows to invoke the JSON parser
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload

    })
    console.log(await response.json())
    if (response.ok) {
      let SucMsg = '<ul>\n'
      const newTxtSuc = 'Your submission was successful'
      SucMsg += `<li>${newTxtSuc}</li>\n`
      SucMsg += '<ul>\n'
      document.getElementById('text-box').innerHTML = SucMsg
    }
  } catch (error) {
    let errorMsg = '<ul>\n'
    const newTxt = 'Sorry, your submission was unsuccessful. You have an error 404, please check your connection'
    errorMsg += `<li>${newTxt}</li>\n`
    errorMsg += '</ul>\n'
    document.getElementById('text-box').innerHTML = errorMsg
  }
})

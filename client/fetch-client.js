const con = document.getElementById('form-duel')

// https://softauthor.com/get-id-of-clicked-element-in-javascript/#get-id-of-clicked-element-using-parent-element
const buttonGroup = document.getElementById('buttonGroup')

// JavaScript to find out which button is pressed
// From the options Duelist, Sentinels, Initiators, Controllers
// When a button is pressed the ID of that button is sent to the server
// The server then returns data which is then turned in bullet-points
// It is then returned to the neccessary container

const buttonGroupPressed = async (e) => {
  const isButton = e.target.nodeName === 'BUTTON'

  if (!isButton) {
    return
  }
  const clickedID = e.target.id
  console.log(e.target.id)
  try {
    const response = await fetch('http://127.0.0.1:6969/load?clickedID=' + clickedID)
    if (response.ok) {
      const placeholder = await response.json()
      let html = '<ul>\n'
      for (const place of placeholder) {
        html += `<li>${place}</li>\n`
      }
      html += '</ul>\n'
      console.log(html)
      document.getElementById(clickedID + 'con').innerHTML = html
    } else {
      alert('Error 404, check your connection')
    }
  } catch (e) {
    alert('Error 404, check your connection')
  }
}

buttonGroup.addEventListener('click', buttonGroupPressed)

// When a Name or class is submitted
// This code waits for a response from the server
// It takes the response and puts it in a list which
// is then sent back to the page and put in the appropriate
// place using DOM manipulation
con.addEventListener('submit', async function (event) {
  event.preventDefault()
  try {
    const Name = document.getElementById('in-Name').value
    const response = await fetch('http://127.0.0.1:6969/Abilities?Name=' + Name)
    if (response.ok) {
      const AbilityReturned = await response.json()
      let html = '<ul>\n'
      for (const temp of AbilityReturned) {
        html += `<li>${temp}</li>\n`
      }
      if (html === '<ul>\n') {
        const NewTemp = 'This item does not exist. Try adding it with the New Agent button.'
        html += `<li>${NewTemp}</li>\n`
      }
      html += '</ul>\n'
      console.log(html)
      document.getElementById('container').innerHTML = html
    } else {
      alert('Error 404, sorry your connection has been lost')
    }
  } catch (e) {
    alert('Error 404, sorry your connection has been lost')
  }
})

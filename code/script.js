// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendButton = document.querySelector('.send-btn')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')


// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `  
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Greeting from bot
const greeting = () => {
  showMessage(`Hello there, I'm your life coach and I'm here to help you become the best version of yourself. What's your name?`, 'bot')
}


// Event listener and validation of name input

sendButton.addEventListener('click', (e) => {
  e.preventDefault()
  const name = nameInput.value
    if(name === "") {
      showMessage('Please enter your name','bot')
    }
    else {
      showMessage(`${name}`,'user')
      showCoachAreas(name)
  }}
  )
    
//Function for displaying available times

const appointment = () => {
  inputWrapper.innerHTML = `
          <select id='select'>
            <option value='' selected disabled>Select time and day</option>
            <option value='Wednesday 4pm'>Wednesday 4pm</option>
            <option value='Thursday 3pm'>Thursday 3pm</option>
            <option value=-Friday 1pm'>Friday 1pm</option>
          </select>
        `
        return inputWrapper
  }
  

  //Function that displays new input bar after user chooses a time

  const textInput = () => {
    inputWrapper.innerHTML = `
    <form id='name-form'>
    <input id='name-input' type='text'/>
    <button class='send-btn' type='submit'>
            Send
    </button>
    </form>
    `;

  document.querySelector('.send-btn').addEventListener('click', (e) => {
    e.preventDefault()
    
    let address = document.querySelector('#name-input').value
    showMessage(address, 'user')
    document.querySelector('#name-input').value = ''


    setTimeout(()=> {
      showMessage('Thanks, See you next week!', 'bot')
    }, 2000)
    
  })
      
  }


//Function that displays 4 buttons
const showCoachAreas = (name) => {
    showMessage(`Hi ${name}, which area of your life do you want to focus on?`, 'bot')

  inputWrapper.innerHTML = `
  <button id='workBtn'>Work</button>
  <button id='familyBtn'>Family</button>
  <button id='lifeBtn'>Life</button>
  <button id='healthBtn'>Health</button>
  ` ;

  // Message from bot after click on button 
  document.getElementById('workBtn').addEventListener('click', () => {
    showMessage('Work', 'user')  
    showMessage('Great, you want to focus on the area of work. Please choose a time and day', 'bot')
    appointment()

    
    const select = document.getElementById('select')
    select.addEventListener('change', () => {
      showMessage(`${select.value}`, 'user')
      showMessage('Excellent, the cost per appointment is 800 sek.', 'bot')
      showMessage('Please, enter the address you want your invoice to be sent to.', 'bot')
      textInput()
       
    })
         
  })


   // Message from bot after click on family button         
  document.getElementById('familyBtn').addEventListener('click', () => {
    showMessage('Family', 'user')
    showMessage('Great, you want to focus on the area of family. Please choose a time and day', 'bot')
    appointment()
    
    const select = document.getElementById('select')
    select.addEventListener('change', () => {
      showMessage(`${select.value}`, 'user')
      showMessage('Excellent, the cost per appointment is 800 sek.', 'bot')
      showMessage('Please, enter the address you want your invoice to be sent to.', 'bot')
      textInput()
    })

  })
       
  // Message from bot after click on Life button  
  document.getElementById('lifeBtn').addEventListener('click', () => {
    showMessage('Life', 'user')
    showMessage('Great, you want to focus on the area of life. Please choose a time and day', 'bot')
    appointment()
         
    const select = document.getElementById('select')
    select.addEventListener('change', () => {
      showMessage(`${select.value}`, 'user')
      showMessage('Excellent, the cost per appointment is 800 sek.', 'bot')
      showMessage('Please, enter the address you want your invoice to be sent to.', 'bot')
      textInput()
      }) 

  })

  // Message from bot after click on Health button  
  document.getElementById('healthBtn').addEventListener('click', () => {
    showMessage('Health', 'user');
    showMessage('Great, you want to focus on the area of health. Please choose a time and day', 'bot');
    appointment();
            
      const select = document.getElementById('select');
      select.addEventListener('change', () => {
        showMessage(`${select.value}`, 'user')
        showMessage('Excellent, the cost per appointment is 800 sek.', 'bot')
        showMessage('Please, enter the address you want your invoice to be sent to.', 'bot')
        textInput();
        }); 

  });
 
};


setTimeout(greeting, 1000);



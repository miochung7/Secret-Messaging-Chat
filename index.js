const form = document.querySelector('form');
const {
    hash
} = window.location; // destructure from window.location object 
const linkForm = document.getElementById('link-form')
const messageForm = document.getElementById('message-form');
const messageShow = document.getElementById('message-show');


// removes the # inside hash with empty string and converts Base64 to ASCII code
const message = atob(hash.replace('#', ''));
console.log(message);

if (message) {
    messageShow.classList.remove('hide');
    messageForm.classList.add('hide');
    document.querySelector('h1').innerText = message;
}


form.addEventListener('submit', event => {
    // Default: submits form to back-end server, we don't have this back end server so we will prevent it from submitting. 
    event.preventDefault();
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    input.value = linkInput.value;
    linkForm.classList.remove('hide');
    messageForm.classList.add('hide');
    linkInput.select(); // selects the text inside input
})
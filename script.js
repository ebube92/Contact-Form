console.log('Hello World!');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const button = document.querySelector('button');
const result = document.querySelector('.result');

firstName.value;
lastName.value;
email.value;
message.value;

button.addEventListener('click', () => {
    result.innerHTML = `${firstName.value} ${lastName.value} is my name and my email is ${email.value} and my message is ${message.value}`;
})

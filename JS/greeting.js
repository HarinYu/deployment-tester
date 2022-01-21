const loginForm = document.getElementById('login_form');
const loginInput = document.querySelector('#login_form input');
const welcomeDiv = document.querySelector('#welcome');

const section = document.getElementById('section');
const greeting = document.getElementById('greeting');
const span = document.querySelector('#greeting span:first-child');
const HIDDEN_CLASS = 'hidden';
const USER_KEY = 'username';

function onSubmit(event) {
  event.preventDefault();
  welcomeDiv.style.display = 'none';
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USER_KEY, username);
  section.style.display = 'flex';
  paintSpan(username);
}

function paintSpan(username) {
  span.innerText = `HELLO, ${username}.`;
}

const savedUsername = localStorage.getItem(USER_KEY);

if (savedUsername === null) {
  section.style.display = 'none';
  welcomeDiv.style.display = 'flex';
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', onSubmit);
} else {
  section.style.display = 'flex';
  paintSpan(savedUsername);
}

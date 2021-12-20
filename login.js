const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const todoTotal = document.querySelector("#todo-total");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY)

function login(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    SayHello(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoTotal.classList.remove(HIDDEN_CLASSNAME);
}

function SayHello(name) {
    greeting.innerText = `Hello ${name}`;
}

if (savedUsername !== null) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    SayHello(savedUsername);    
    todoTotal.classList.remove(HIDDEN_CLASSNAME);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", login); 
    todoTotal.classList.add(HIDDEN_CLASSNAME);
}
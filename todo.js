const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

const LI_KEY = "li";
const BTN_KEY = "button";
const TODOS_KEY = "todos";
const CLICK_KEY = "click";


let todos = [];

function remainTodo(todos){
    const todoInput = todos.text;
    const todoId = todos.id;
    const li = document.createElement(LI_KEY);
    li.innerText = todoInput;
    li.id = `${todoId}`;
    const btn = document.createElement(BTN_KEY);
    btn.innerText = "delete";
    todoList.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener(CLICK_KEY,deleteTodo);
}

function paintTodo(event) {
    if (todos.length < 7) {
            event.preventDefault();
            const todoInput = todoForm.querySelector("input").value;
            todoForm.querySelector("input").value = "";
            const li = document.createElement(LI_KEY);
            li.innerText = todoInput;
            li.id = `${Date.now()}`;
            const btn = document.createElement(BTN_KEY);
            btn.innerText = "delete";
            todos.push({text: todoInput, id: li.id});
            todoList.appendChild(li);
            li.appendChild(btn);    

            saveTodo();
            btn.addEventListener(CLICK_KEY,deleteTodo);
    } else {
            alert("오바하지마");
    }        
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const deleted_li = event.target.parentElement;
    deleted_li.remove();
    todos = todos.filter(item => (item.id !== deleted_li.id));
    saveTodo();
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    todos.forEach(remainTodo);
}

todoForm.addEventListener("submit",paintTodo);
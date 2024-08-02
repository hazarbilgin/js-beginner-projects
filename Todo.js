//selected all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const SecondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    SecondCardBody.addEventListener("click", deleteTodo);
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        /*   <div class="alert alert-danger">
                        <strong>Oh snap!</strong> Change a few things up.
                        </div> */

        showAlert("danger", "Lütfen bir todo giriniz...");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo'nuz Başarı ile eklendi...")
    }

    addTodoToUI(newTodo);
    e.preventDefault();
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = "alert alert-" + type;
    alert.textContent = message;
    //set time out

    window.setTimeout(function () {
        alert.remove();
    }, 1000);

    firstCardBody.appendChild(alert);


}
function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Başarıyla Todo'nuz silinmiştir...");
    }

}

function deleteTodoFromStorage(deletetodo) {

    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1); //arrayden değeri silebiliriz.
        }

    }

    );

    localStorage.setItem("todos", JSON.stringfy(todos));
}

function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToUI(newTodo) // string alınan degeri list item olarak UI'ya ekleme fonksiyonu
{
    /* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> */
    //list item oluşturma
    const listItem = document.createElement("li");
    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";


    listItem.className = "list-group-item d-flex justify-content-between";

    //test Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //Todo list'e list item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";

}

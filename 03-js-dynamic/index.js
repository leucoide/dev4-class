//document.querySelectorAll('li').forEach(el => el.onclick = event => event.target.classList.add('done'));

function toggleDone(element){
        element.classList.toggle('done');
}
function handleTodoClick(event) {
    toggleDone(event.target);
}

document.querySelectorAll('li').forEach(function (el) {
    el.onclick = handleTodoClick
});

function addTodoItem(){
    const todoInput = document.querySelector('#new-todo');
    
    const itemValue = todoInput.value;
    const todoList = document.querySelector('#todo-list');

    const todoItem = document.createElement('li');
    const textNode = document.createTextNode(itemValue);
    
    todoItem.appendChild(textNode);
    todoItem.onclick = handleTodoClick;
    todoList.appendChild(todoItem);

    todoInput.value = '';
}



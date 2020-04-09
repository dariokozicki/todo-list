const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let checkedCount = 0;
let itemCount = 0;
function newTodo() {
  let itemDescription = window.prompt("Enter your new TO-DO item", "To do...")
  let todoItem = document.createElement("li")
  let todoText = document.createTextNode(itemDescription)
  let todoCheckbox = document.createElement("input")
  let todoDelete = document.createElement("button")
  todoDelete.innerHTML = "X"
  todoCheckbox.type = "checkbox"
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX)
  todoItem.classList.add(classNames.TODO_ITEM)
  todoItem.classList.add(classNames.TODO_TEXT)
  todoItem.appendChild(todoText)
  todoItem.appendChild(todoCheckbox)
  todoItem.appendChild(todoDelete)
  todoDelete.onclick = function () {
    itemCount--
    itemCountSpan.innerHTML = itemCount;
    checkedCount += todoCheckbox.checked ? -1 : 0;
    uncheckedCountSpan.innerHTML = itemCount - checkedCount
    list.removeChild(todoItem)
  }
  todoCheckbox.onclick = function () {
    checkedCount += (todoCheckbox.checked ? 1 : -1);
    uncheckedCountSpan.innerHTML = itemCount - checkedCount
  }
  list.appendChild(todoItem);
  itemCount++
  uncheckedCountSpan.innerHTML = itemCount - checkedCount
  itemCountSpan.innerHTML = itemCount;
}

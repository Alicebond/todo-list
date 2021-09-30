"use strict";

function addNewTodo() {
  const todos = document.querySelector(".todos");
  const newTodo = document.querySelector(".todo-input").value.trim();
  if (!newTodo) return;
  const todoDiv = document.createElement("div");
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  const todoContent = document.createElement("div");
  todoDiv.classList.add("todo");
  label.classList.add("label");
  checkbox.type = "checkbox";
  checkbox.name = "todo-checkbox";
  todoContent.classList.add("todo-content");
  todoContent.textContent = newTodo;

  todos.prepend(todoDiv);
  todoDiv.append(label);
  todoDiv.append(todoContent);
  label.append(checkbox);

  addDeleteBtn(todoContent);
}

function addDeleteBtn(element) {
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("btn", "delete");
  deleteBtn.onclick = function () {
    removeList(this);
  }
  const delIcon = document.createElement("i");
  // <i class="fas fa-trash-alt"></i> // Icon tag from font awesome
  delIcon.classList.add("fas", "fa-trash-alt")

  element.append(deleteBtn);
  deleteBtn.append(delIcon);
}


function removeList(el) {
  let deleteBtn = el;
  deleteBtn.parentElement.parentElement.remove();
}

export {
  addNewTodo,
}
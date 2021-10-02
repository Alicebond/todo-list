"use strict";
import {
  storeList,
} from "./logic.js";

function addNewList() {
  const lists = document.querySelector(".lists");
  const newListName = document.querySelector(".new-list").value.trim();
  if (!newListName) return;
  const newList = document.createElement("li");
  newList.textContent = newListName;
  newList.classList.add('list-name', "user-list", newListName);
  lists.appendChild(newList);
  addDeleteBtn(newList);
  storeList(newListName);
}

function addNewTodo() {
  const todos = document.querySelector(".todos");
  const newTodo = document.querySelector(".todo-input").value.trim();
  if (!newTodo) return;
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  const todoContent = document.createElement("div");
  label.classList.add("label");
  checkbox.type = "checkbox";
  checkbox.name = "todo-checkbox";
  todoContent.classList.add("todo", "todo-content");
  todoContent.textContent = newTodo;

  todos.prepend(todoContent);
  todoContent.append(label);
  label.append(checkbox);

  addDeleteBtn(todoContent);
}

function addNotes() {
  const notesBlock = document.querySelector(".todo-notes");
  const notes = document.querySelector(".notes").value.trim();
  if (!notes) return;
  const notesContent = document.createElement("div")
  notesContent.textContent = notes;
  notesBlock.append(notesContent);
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
  deleteBtn.parentElement.remove();
}

export {
  addNewTodo,
  addNewList,
  addNotes,
}
"use strict";
import './style.css';
import {
  addNewList,
  getNewTodo,
  showTodo,
  addNotes,
  showDorpdown,
  closeDorpdown,
  getPri,
  todoItem,
  showList,
} from "./dom.js"

const newListBtn = document.querySelector(".add-new-list");
newListBtn.addEventListener("click", addNewList, false);

const newTodoBtn = document.querySelector(".add-new-todo");
newTodoBtn.addEventListener("click", getNewTodo, false);

const addNoteBtn = document.querySelector(".add-notes-btn");
addNoteBtn.addEventListener("click", addNotes, false);

const priBtn = document.querySelector(".pri-btn");
priBtn.addEventListener("click", showDorpdown, false);
closeDorpdown();

const priDropdown = document.querySelector("#priDropdown")
priDropdown.addEventListener("click", e => {
  getPri(e)
}, false);

const dueDate = document.querySelector("#dueDate").value;
if (dueDate) todoItem.storeDate(dueDate);

const list = document.querySelector("#lists");
list.addEventListener("click", e => {
  showList(e)
})

const todos = document.querySelector("#todos");
todos.addEventListener("click", e => {
  showTodo(e);
})

todoItem.store();
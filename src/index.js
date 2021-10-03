"use strict";
import './style.css';
import {
  addNewList,
  addNewTodo,
  addNotes,
  showDorpdown,
  closeDorpdown,
  getPri,
} from "./dom.js"

const newListBtn = document.querySelector(".add-new-list");
newListBtn.addEventListener("click", addNewList, false);

const newTodoBtn = document.querySelector(".add-new-todo");
newTodoBtn.addEventListener("click", addNewTodo, false);

const addNoteBtn = document.querySelector(".add-notes");
addNoteBtn.addEventListener("click", addNotes, false);

const priBtn = document.querySelector(".pri-btn");
priBtn.addEventListener("click", showDorpdown, false);
closeDorpdown();

const priDropdown = document.querySelector("#priDropdown")
priDropdown.addEventListener("click", e => {
  getPri(e)
}, false);
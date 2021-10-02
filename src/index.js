"use strict";
import './style.css';
import {
  addNewList,
  addNewTodo,
  addNotes
} from "./dom.js"

const newListBtn = document.querySelector(".add-new-list");
newListBtn.addEventListener("click", addNewList);

const newTodoBtn = document.querySelector(".add-new-todo");
newTodoBtn.addEventListener("click", addNewTodo);

const addNoteBtn = document.querySelector(".add-notes");
addNoteBtn.addEventListener("click", addNotes);
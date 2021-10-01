"use strict";
import './style.css';
import {
  createNewList,
} from "./showLists.js"
import {
  addNewTodo,
} from "./showTodos.js"

const newListBtn = document.querySelector(".add-new-list");
newListBtn.addEventListener("click", createNewList);

const newTodoBtn = document.querySelector(".add-new-todo");
newTodoBtn.addEventListener("click", addNewTodo);
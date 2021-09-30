"use strict";
import './style.css';
import {
  createNewList,
} from "./lists.js"
import {
  addNewTodo,
} from "./todos.js"

const newListBtn = document.querySelector(".add-new-list");
newListBtn.addEventListener("click", createNewList);

const newTodoBtn = document.querySelector(".add-new-todo");
newTodoBtn.addEventListener("click", addNewTodo);
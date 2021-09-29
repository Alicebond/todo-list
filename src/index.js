"use strict";
import './style.css';
import {
  createNewList,
  // listenRemoveBtn
} from "./lists.js"

const newListBtn = document.querySelector(".submit");
newListBtn.addEventListener("click", createNewList);

// const userList = document.querySelector(".user-list");
// if (userList) listenRemoveBtn();
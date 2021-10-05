"use strict";

let listsLibrary = [];

function storeList(newList) {
  listsLibrary.push(newList);
  localStorage.setItem("lists", listsLibrary);
}

function todo(newTodo) {
  let todo = newTodo;

  // function
}

export {
  storeList,
}
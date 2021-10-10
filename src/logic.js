"use strict";
let lists = [];
localStorage.setItem("lists", lists);

function storeList(newList) {
  const store = () => {
    lists.push(newList);
  }
  const newTodo = todoFactory(todo, notes, color)
  const storeTodo = () => {
    newList.push(newTodo);
  }

  return {
    store,
    storeTodo,
  }
}

function todoFactory(newTodo, notes, color) {
  let todo = newTodo;
  let notesArr = [];
  let dueDate;
  let priority = []

  const storeNotes = () => {
    notesArr.push(notes);
  }

  const storePri = () => {
    priority.push(color);
  }

  return {
    todo,
    notesArr,
    priority,
  }
}

const todoItem = todoFactory();
const library = store();

export {
  library,
}
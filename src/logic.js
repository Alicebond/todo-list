"use strict";
let lists = {};

function todoFactory() {
  let todo;
  let notesArr = [];
  let date;
  let priority = [];
  let listName;

  const storeTodo = newTodo => {
    todo = newTodo;
  }

  const storeDate = (dueDate) => {
    date = dueDate
  }

  const storeListName = (list) => {
    listName = list;
  }

  const store = () => {
    lists[listName] = [];
    lists[listName].push(makeTodoObj());
    localStorage.setItem("lists", lists);
  }

  const storeNotes = (notes) => {
    notesArr.push(notes);
  }

  const storePri = (color) => {
    priority.push(color);
  }

  const makeTodoObj = () => {
    return {
      todo,
      listName,
      notesArr,
      date,
      priority
    };
  }

  return {
    storeTodo,
    storeDate,
    storeListName,
    storeNotes,
    storePri,
    makeTodoObj,
    store,
  }
}

const todoItem = todoFactory();

export {
  todoItem,
}
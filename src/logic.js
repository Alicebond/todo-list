"use strict";

let listsLibrary = [];

function storeList(newList) {
  listsLibrary.push(newList);
  localStorage.setItem("lists", listsLibrary);
}
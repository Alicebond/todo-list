"use strict";

function createNewList() {
  const lists = document.querySelector(".lists");
  const newListName = document.querySelector(".new-list").value;
  if (!newListName) return;
  const newList = document.createElement("li");
  newList.textContent = newListName;
  newList.classList.add('list-name', "user-list", newListName);
  addDeleteBtn(newList, newListName);
  lists.appendChild(newList);
}

function addDeleteBtn(newList, newListName) {
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("btn", "delete");
  const delIcon = document.createElement("i");
  // <i class="fas fa-trash-alt"></i>
  delIcon.classList.add("fas", "fa-trash-alt", newListName)

  newList.appendChild(deleteBtn);
  deleteBtn.appendChild(delIcon);
}

/*
function listenRemoveBtn() {
  const removeBtn = document.querySelector(".fa-trash-alt");
  removeBtn.addEventListener("click", removeList);
}

function removeList() {
  const removeBtn = document.querySelector(".fa-trash-alt");
  const listName = removeBtn.classList[2];
  listEl = document.querySelector(`.${listName}`)
  listEl.remove();
}
*/

export {
  createNewList,
}
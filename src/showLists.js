"use strict";

function createNewList() {
  const lists = document.querySelector(".lists");
  const newListName = document.querySelector(".new-list").value.trim();
  if (!newListName) return;
  const newList = document.createElement("li");
  newList.textContent = newListName;
  newList.classList.add('list-name', "user-list", newListName);
  lists.appendChild(newList);
  addDeleteBtn(newList);
}

function addDeleteBtn(newList) {
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("btn", "delete");
  deleteBtn.onclick = function () {
    removeList(this);
  }
  const delIcon = document.createElement("i");
  // <i class="fas fa-trash-alt"></i> // Icon tag from font awesome
  delIcon.classList.add("fas", "fa-trash-alt")

  newList.appendChild(deleteBtn);
  deleteBtn.appendChild(delIcon);
}


function removeList(el) {
  let deleteBtn = el;
  deleteBtn.parentElement.remove();
}


export {
  createNewList,
}
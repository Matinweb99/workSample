const addBtn = document.querySelector(".add-btn");
const itemList = document.querySelector(".todo_item-list");
const doneButton = document.querySelectorAll(".todo_done-btn");
const delButton = document.querySelectorAll(".todo_del-btn");
const todoItem = document.querySelectorAll(".todo_item");
const itemsWrapper = document.querySelectorAll(".todo_item-wrapper");

addBtn.addEventListener("click", addItem);
document.addEventListener("keydown", (e) => {
  if (e.key == 'Enter') {
    addItem();
  }
})

function addItem() {
  let inputText = document.querySelector(".added-work").value;
  let txt = document.createTextNode(inputText);
  let newItem = document.createElement("div");
  newItem.className = "todo_item";
  newItem.append(txt);
  if (inputText === "") {
    alert("you must write something");
  } else {
    let doneBtn = document.createElement("button");
    doneBtn.className = "todo_done-btn";
    doneBtn.innerText = "done";

    let delBtn = document.createElement("button");
    delBtn.className = "todo_del-btn";
    delBtn.innerText = "del";

    let itemWrapper = document.createElement("div");
    itemWrapper.className = "todo_item-wrapper";
    itemWrapper.append(newItem, doneBtn, delBtn);
    itemList.append(itemWrapper);

    doneBtn.addEventListener('click', (e) => {
      newItem.classList.toggle('todo_item--done')
    })
    delBtn.addEventListener('click',(e) => {
      itemWrapper.style.width = '0';
      itemWrapper.style.height = '0';
      itemWrapper.style.marginTop = '0';
    })
    newItem.addEventListener("click", (e) => {
      newItem.classList.toggle("todo_item--done")
    })
  }
  document.querySelector(".added-work").value = "";
}

doneButton.forEach((e, idx) => {
  e.addEventListener("click",(el) => {
      lineTh(todoItem[idx])
  }, false);
});
function lineTh(el) {
    el.classList.toggle('todo_item--done')
}

delButton.forEach((e, idx) => {
    e.addEventListener('click',(el) => {
        delItem(itemsWrapper[idx]);
    }, false)
})
function delItem(el) {
    el.style.width = '0';
    el.style.height = '0';
    el.style.marginTop = '0';
}

todoItem.forEach((e, idx) => {
  e.addEventListener("click", (el) => {
    todoItem[idx].classList.toggle("todo_item--done")
  })
})
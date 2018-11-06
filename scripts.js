const ENTER_KEYCODE = 13; // Key code for "Enter" key

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const items = document.querySelector(".items");

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    // A LIST OF EVENT LISTENERS
    _form.addEventListener("submit", formHandler);
    _items.addEventListener("click", deleteItem);
    _items.addEventListener("click", finish);
    _items.addEventListener("click", edit);
    _items.addEventListener("keyup", commit);
  }
  // FUNCTION TO SUBMIT THE INPUT TO THE LIST
  function formHandler(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.querySelector(".form__input").value;

    // Checking if the input string is not empty. If so not allowing to submit
    if (document.querySelector(".form__input").value.trim() === "") {
      document.querySelector(".form__input").value = "";
      return false;
    }

    // Create new li element
    const li = document.createElement("li");
    li.className = "item";

    // Create checkbox element
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "item__checkbox";

    // Create span element
    const span = document.createElement("span");
    span.className = "item__text";
    span.appendChild(document.createTextNode(newItem));

    // Create delete button element
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "item__button";
    deleteBtn.appendChild(document.createTextNode("Eyða"));

    // Append elements to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    // Append li to list
    items.appendChild(li);
    // Emptying the text field after submitted
    document.querySelector(".form__input").value = "";
  }

  // FUNCTION TO CROSS OUT THE TASK
  function finish(e) {
    if (e.target.classList.contains("item__checkbox")) {
      if (e.target.checked === true) {
        const li = e.target.parentElement;
        li.className = "item item--done";
      } else {
        const li = e.target.parentElement;
        li.className = "item";
      }
    }
  }

  // FUNCTION TO CHANGE PREVIOUSLY CREATED TASK
  function edit(e) {
    if (e.target.classList.contains("item__text")) {
      const textVal = e.target.innerHTML;
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.className = (e.target.classList, "item__edit");
      input.value = textVal;
      const span = e.target;
      const li = e.target.parentElement;
      li.replaceChild(input, span);
      input.focus();
    }
  }

  // FUNCTION TO FINISH CHANGING THE TASK
  function commit(e) {
    if (e.keyCode === ENTER_KEYCODE) {
      if (e.target.classList.contains("item__edit")) {
        const textVal = e.target.value;
        const span = document.createElement("span");
        span.className = "item__text";
        span.innerHTML = textVal;
        const input = e.target;
        const li = e.target.parentElement;
        li.replaceChild(span, input);
      }
    }
  }

  // FUNCTION TO ENABLE DELETING ITEMS USING "EYÐA" BUTTON
  function deleteItem(e) {
    if (e.target.classList.contains("item__button")) {
      const li = e.target.parentElement;
      items.removeChild(li);
    }
  }

  return {
    init: init
  };
})();

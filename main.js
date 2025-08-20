// In this exercise we want you to build a dynamic shopping list that allows you to add items using a form input and button. When you add enter an item and press the button:

/*
    The item should appear in the list.
    Each item should be given a button that can be pressed to delete that item off the list.
    The input should be emptied and focused, ready for you to enter another item.
*/

// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const listDisplay = document.querySelector("ul")
const inputEl = document.querySelector("input")
const addItemBtn = document.querySelector("button")


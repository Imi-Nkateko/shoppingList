// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const listDisplay = document.querySelector("ul")
const inputEl = document.querySelector("#item")
const addItemBtn = document.querySelector("button")

// Create a function that will run in response to the button being clicked
addItemBtn.addEventListener("click",  () => {
    
    let inputValue = inputEl.value

    if (inputValue !== "") {
         let listItem = document.createElement("li")
    listItem.innerHTML = `<li>${inputValue} <button class="delete-btn">Delete</button></li>`

    listDisplay.appendChild(listItem)


    let deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            listDisplay.removeChild(listItem)
        })
    }
        
   
    inputEl.value = "";
    inputEl.focus()
})

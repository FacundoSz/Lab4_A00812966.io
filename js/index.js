let newTodo = document.getElementsByClassName("newTodo form-control")[0];


let submitAllButton = document.getElementsByClassName("submitButton")[0];
submitAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newlist = document.getElementById("ToDoList");
    let newTitem = newTodo.value;
        var node = document.createElement("li");
        var text = document.createTextNode(newTitem);
        var input = document.createElement("input");
        node.className = "item";
        input.type = "checkbox";
        input.className = "newAL";
        node.appendChild(input);
        node.appendChild(text);
        newlist.appendChild(node);
        newTodo.value = "";   
})

let markAllButton = document.getElementsByClassName("markAllButton btn-success")[0];
markAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    let VarTodoList = document.getElementsByClassName("newAL");
    let size = VarTodoList.length
    for(var i = 0; i < size; i++) {
        VarTodoList[i].checked = true;
    }
})


let deleteAllButton = document.getElementsByClassName("deleteButton btn-danger")[0];
deleteAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newlist = document.getElementsByClassName("item");
    let size = newlist.length
    for(var i = 0; i < size; i++) {
        newlist[0].parentNode.removeChild(newlist[0]);
    }

})

let clearAllButton = document.getElementsByClassName("clearButton btn-info")[0];
clearAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    let VarTodoList = document.getElementsByClassName("newAL");
    let size = VarTodoList.length
    for(var i = 0; i < size; i++) {
        VarTodoList[i].checked = false;
    }
})




const toDoForm = document.getElementById("todo-form")
const toDoInput = document.getElementById("#todo-form input")
const toDoList = document.getElementById("todo-list")

function deleteToDo(event) { //μ­μ 
//  console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newToDo) { //μλ ₯
 const li = document.createElement('li')
 const span = document.createElement('span')
 span.innerText = newToDo;
 const btn = document.createElement('button');
 btn.innerText = "πββοΈ ";
 btn.addEventListener("click",deleteToDo)
 li.appendChild(span);
 li.appendChild(btn);
 toDoList.appendChild(li);

}

function handleToDoSubmit (event) {
event.preventDefault();
const newToDo = toDoInput.value; //κ° μ§μμ§κΈ° μ μ λμ
toDoInput.value = "";
paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
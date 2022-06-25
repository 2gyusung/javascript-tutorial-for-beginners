// 유저가 값을 입력한다
// + 버튼 클릭 시 할일이 추가된다
// del 누르면 할일이 삭제된다
// check 누르면 할일이 끝나면서 밑줄
// 진행중 탭을 누르면 , 언더바가 이동한다
// 끝남 탭은 끝난 아이템만 진행중 탭은 진행중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let taskList = []


function render() {
  let resultHTML = '';
  for(let i =0; i<taskList.length; i++){
    resultHTML += `<div class="task"> 
    <div>${taskList[i]}</div>
    <div>
    <button>Check</button>
    <button>Delete</button>
  </div>
  </div>`;
  }
  document.getElementById('task-board').innerHTML = resultHTML;
}


function addTask() {
let taskContent = taskInput.value
taskList.push(taskContent)
// console.log(taskList);
render()
}




addButton.addEventListener('click', addTask)
// https://hianna.tistory.com/483


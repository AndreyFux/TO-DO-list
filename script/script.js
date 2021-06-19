
const todoForm = document.querySelector('#todo-form');
const inputText = document.querySelector('#inputText');
// let objTodo = {};
// localStorage.setItem ("object", JSON.stringify(objTodo));
// objectTodo = JSON.parse (localStorage.getItem ("object"));
// console.log(objectTodo)

let divChild = document.createElement('span');

const handleDelete = (div) => {
    div.remove();
}
const checkRepeatText = () => {
    let divCreate = true;
    let divs = [...document.getElementsByClassName('syka')];
    divs.forEach(key => {
        if (inputText.value === key.querySelector('.syka2').innerHTML){
            divCreate = false;
        };
    });
    return divCreate;
}
function handleCreate(){
    if (!checkRepeatText()){
        inputText.style.border = '1px solid red';
        inputText.placeholder = "Одинаковую задачу создать нельзя";
        return;
    }
    let div = document.createElement('div');
    div.className = "syka";
    let divChild = document.createElement('span');
    divChild.className = "syka2"

    let getText = document.getElementById("inputText").value;
    divChild.innerHTML = getText;

    let exitButton = document.createElement('div');
    exitButton.className = "exit";

    let imageExit = document.createElement ("IMG");
    imageExit.setAttribute ("src", "../images/exit.png");
    imageExit.className = "exit1";
    imageExit.onclick = () => handleDelete(div);
    

    document.body.append(exitButton);
    document.body.append(imageExit);
    document.body.append(div);
    document.body.append(divChild);
    div.append(divChild);
    div.append(exitButton);  
    exitButton.append(imageExit);
    // if (localStorage.getItem(getText) === null){
    // localStorage.setItem(getText,getText);
    
    // localStorage.getItem('MyKey');
    // }
   
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputText.value === '') {
        inputText.style.border = '1px solid red';
        inputText.placeholder = "Пустую строку добавлять нельзя";
    }
    else{
    handleCreate();
    inputText.value = ''
    }
})
todoForm.addEventListener('click', function(e){
    if(inputText.style.border === '1px solid red'){
        inputText.style.border = '2px solid #7BA7AB';
        inputText.placeholder = 'New task';
    }
})
inputText.addEventListener("input", function(){
    inputText.style.border = '2px solid #7BA7AB';
    inputText.placeholder = ' ';
})
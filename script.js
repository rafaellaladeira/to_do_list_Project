const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

function inputLength() {
  return input.value.length;
}

function createList() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = '';// para o texto sumir qdo for clicado
  
    function changeColor() {
        li.classList.toggle('change');
    } 
    li.addEventListener('click', changeColor);

    function lineComplete() {
        li.classList.toggle('completed');
    }
    li.addEventListener('dblclick', lineComplete);

}

function addClick() {
    if (inputLength () > 0){
        createList();
}
}

function addPress() {
    if (inputLength () > 0 && event.witch === 13) {
        createList();
}
}
button.addEventListener('click', addClick);
input.addEventListener('keypress', addPress);

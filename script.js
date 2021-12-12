const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const deleteList = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
button.innerText = 'Adicionar';
deleteList.innerText = 'Apaga tudo';
deleteCompleted.innerText = 'Concluídos';

function inputLength() {
  return input.value.length;
}

function createList() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';

  function changeColor() {
    li.classList.toggle('change');
  }
  li.addEventListener('click', changeColor);

  function lineComplete() {
    li.classList.toggle('completed');
  }
  li.addEventListener('dblclick', lineComplete);

  function deleteEventCompleted() {
    if (li.className === ('completed')) {
      li.remove('completed');
    }
  }
  deleteCompleted.addEventListener('click', deleteEventCompleted);
}

function addClick() {
  if (inputLength() > 0) {
    createList();
  }
}

function addPress() {
  if (inputLength() > 0 && event.witch === 13) { // 13 - enter
    createList();
  }
}

button.addEventListener('click', addClick);
input.addEventListener('keypress', addPress);

function deleteElement() {
  ol.innerHTML = '';
}
deleteList.addEventListener('click', deleteElement);

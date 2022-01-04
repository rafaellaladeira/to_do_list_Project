const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const deleteList = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
button.innerText = 'Adicionar';
deleteList.innerText = 'Apaga tudo';
deleteCompleted.innerText = 'Concluídos';

// Bônus:

const buttonSave = document.querySelector('#salvar-tarefas');
buttonSave.innerText = 'Salvar';
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
buttonUp.innerText = 'Cima';
buttonDown.innerText = 'Baixo';
const buttonDeleteSelected = document.querySelector('#remover-selecionado');

function inputLength() {
  return input.value.length;
}

function createList() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';

  // __
  function changeColor(event) {
    const liArray = document.querySelectorAll('li');
    for (let i = 0; i < liArray.length; i += 1) {
      liArray[i].classList.remove('change');
    } event.target.classList.add('change');
  }
  li.addEventListener('click', changeColor);

  function lineComplete() {
    li.classList.toggle('completed');
  }
  li.addEventListener('dblclick', lineComplete);

  function deleteEventCompleted() {
    if (li.classList.contains('completed')) {
      li.remove('completed');
    }
  }
  deleteCompleted.addEventListener('click', deleteEventCompleted);

  function deleteSelected() {
    if (li.className === ('change')) {
      li.remove('change');
    }
  }
  buttonDeleteSelected.addEventListener('click', deleteSelected);
}

// Salvar:

function saveList() {
  const saved = ol.innerHTML;
  localStorage.setItem('li', saved);
}
buttonSave.addEventListener('click', saveList);

window.onload = function openList() {
  ol.innerHTML = localStorage.getItem('li');
};

// move up and down:
// Referência: https://www.codegrepper.com/code-examples/javascript/javascript+move+list+items+up+and+down
/* function moveUp() {
  const liArray = document.querySelectorAll('li');
  for (let i = 0; i < liArray.length; i += 1) {
    const teste = liArray[i].classList.contains('change');
  if (teste.previousElementSibling) {
    teste.parentNode.insertBefore(teste, teste.previousElementSibling);
  }
}
}
function moveDown() {

    for (let i = 0; i < ol.children.length; i += 1) {
      const teste = ol.children.classList === ('change');
    if (teste[i].nextElementSibling) {
      teste[i].parentNode.insertBefore(teste[i].nextElementSibling, teste[i]);
    }
  }
}

buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown); */

//
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

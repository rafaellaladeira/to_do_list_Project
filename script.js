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

  function saveList() {
    localStorage.setItem(li, li);
  }
  buttonSave.addEventListener('click', saveList);

  /* function moveUp() {
      let liChanged = document.querySelector('change');
     liChanged.insertBefore(liChanged.prev());
        li
      }

  function moveDown() {
    for (let i = 0; i < li.length; i += 1) {
      if (li.classList === ('change')) {
        li[i] + 1;
      } */

/*  buttonUp.addEventListener('click', moveUp);
  buttonDown.addEventListener('click', moveDown); */

  function deleteSelected() {
    if (li.className === ('change')) {
      li.remove('change');
    }
  }
  buttonDeleteSelected.addEventListener('click', deleteSelected);
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

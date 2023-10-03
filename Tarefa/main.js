const form = document.querySelector('.form');

const input = document.getElementById('input');

const lista = document.getElementById('lista');

//cria matriz vazia pra armazem tarefas
let todos = []

//func exibir lista tarefas
function listarTarefas() {
    //limpa tarefas anteriores
    lista.innerHTML = '';

    //loop para gerar as tarefas criadas
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        //cria elements de lista, texto e botao
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button')
    }
}
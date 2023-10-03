const form = document.querySelector('.form');

const input = document.getElementById('input');

const lista = document.getElementById('lista');

//cria matriz vazia pra armazem tarefas
let todos = [];

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
        const button = document.createElement('button');

        //def txt da tarefa no span
        span.innerHTML = todo;

        //def txt do botao de excluir matriz e mostrar lista dnv
        button.innerHTML = 'Excluir';
        button.addEventListener('click', function () {
            todos.splice(i, 1);
            listarTarefas();
        });

        //add o span e o botao à lista
        li.appendChild(span);
        li.appendChild(button);

        // Adiciona o elemento li na lista de tarefas
        lista.appendChild(li);
    }
}

//detect qnd user envia nova tarefa
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //obtem txt e remove espacos brancos desnecessários
    const texto = input.value.trim();

    //retorna nova tarefa se n tiver txt
    if (texto.length === 0) {
        return;
    }

    //add nova tarefa na matriz, limpa input e mostra lista
    todos.push(texto);
    input.value = '';
    listarTarefas();
});

//load lista tarefas qnd pagina é carregada
listarTarefas();
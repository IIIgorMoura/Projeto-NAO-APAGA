const form = document.querySelector('.login-form');

//select campos entrada usuario e senha
const usernameInput = form.querySelector('input[type="text"]');
    // we id pelo tipo de input, usando form ao inves de document pra indicar qual classe ou dentro doq vai achar o input
const senhaInput = form.querySelector('input[type="password"]');

//detect qnd user clica em submit
form.addEventListener('submit', (event) => {
    //previne q a pag reload qnd form for enviado
    event.preventDefault();

    //usa trim() para remover espaços vazios antes ou dps de cada campo
    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    //verif se tem campos vazios
    if (usuario === '' || senha === ''){
        alert('Por favor, preencha os campos.');
    }
    // verif se info ta correta
    else if (usuario === 'Monke' && senha === '12345678'){
        alert('bem-vindo')

        //redirect user pra outra pag dps login
        location.replace("/Tarefa/index.html", "_self")
    }
    else{
        alert('Usuário ou senha incorreto, tente novamente')
    }
});
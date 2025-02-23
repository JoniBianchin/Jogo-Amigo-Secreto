alert("Olá seja bem vindo ao jogo do Amigo secreto");


let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);

    const listaAmigos = document.getElementById('listaAmigos');
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(novoAmigo);

    inputAmigo.value = '';
}

function sortearAmigo() {
   
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    
    const nomesEmbaralhados = embaralharArray([...amigos]);

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    for (let i = 0; i < nomesEmbaralhados.length; i++) {
        const amigoAtual = nomesEmbaralhados[i];
        const amigoSeguinte = nomesEmbaralhados[(i + 1) % nomesEmbaralhados.length]; 
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} ➔ ${amigoSeguinte}`;
        resultado.appendChild(itemResultado);
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value;
    if( nombre == "" ){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nombre);
        inputAmigo.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }else{
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        
        const resultado = document.getElementById("resultado");
        resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;

        amigos = [];
        mostrarAmigos();
    }
        
}
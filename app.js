let nomeAmigo = [];
let input = document.getElementById("amigo");
let exibirNome = document.getElementById("listaAmigos");
let sortearAmigoSecreto = document.getElementById("resultado");
let tagInputNome = document.querySelector("input");
let buttonNovoSorteio = document.getElementById("novoAmigoSorteado");

esconderButtonNovoSorteio();

function adicionarAmigo(){
    let nome = input.value.trim();
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
if(nomeFormatado === ""){
        alert("Por favor, digite um nome válido!");
    } else if(nomeAmigo.includes(nomeFormatado)){
        alert("Já possui um nome parecido na lista!");
    } else{
            nomeAmigo.push(nomeFormatado);
        let lista = document.createElement("li");
            lista.textContent = nomeFormatado;
            exibirNome.appendChild(lista);
    }
    limparInput();
}
    buttonEnter();

function sortearAmigo(){
    if(nomeAmigo.length <= 1){
        alert("Adicione pelo menos 2 amigos para sortear!")
    }else{
        const amigoSorteado = nomeAmigo[Math.floor(Math.random() * nomeAmigo.length)];
            sortearAmigoSecreto.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}!`
            buttonNovoSorteio.style.display = "flex";
    }       
    limparInput();
}

function limparInput(){
        tagInputNome.value = "";
        focarInput();
}

function novoSorteio(){
    while (exibirNome.firstChild){
        exibirNome.removeChild(exibirNome.firstChild);
    }
        nomeAmigo.splice(0, nomeAmigo.length);
        sortearAmigoSecreto.innerHTML = "";
        focarInput();
        esconderButtonNovoSorteio();
}

function focarInput(){
        tagInputNome.focus();
}

function esconderButtonNovoSorteio(){
        buttonNovoSorteio.style.display = "none";
}

function buttonEnter(){
    input.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            adicionarAmigo();
        }
    });
}
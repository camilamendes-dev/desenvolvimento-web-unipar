function adicionar(evento){

    evento.preventDefault()

    if (evento.target[0].value === "") {
        alert("Vacilo! Informe o nome do produto!")
    }

    if (evento.target[1].value === "") {
        alert("Vacilo! Informe a quantidade!")
        return;
    }

    const produto = "Produto: " + evento.target[0].value; 
    const quantidade = "Quantidade: " + evento.target[1].value; 

    //console.log(evento.target)
    //console.log(evento.target[0].value)
    //console.log(evento.target[1].value)

    const li = document.createElement("li");
    li.textContent = produto + " - " + quantidade;

    li.addEventListener('click', () => remover(li))

    const ul = document.querySelector(".container")

    ul.appendChild(li);

    evento.target[0].value = "";
    evento.target[1].value = "";

}

function remover(elemento){
    console.log(elemento)
    elemento.remove();
}
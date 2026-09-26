const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", function () {

    const texto = inputTarefa.value;

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = texto;

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
});


listaTarefas.addEventListener("click", function (evento) {

    if (evento.target.tagName === "LI") {
        evento.target.remove();
    }

});
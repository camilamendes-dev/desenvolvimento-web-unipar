// Dados fixos do titular da conta
const titular = {
    nome: "Camila Mendes",
    agencia: "0001",
    conta: "123456-7"
};

// Saldo inicial da conta
let saldo = 1000;

// Elemento onde o resultado é exibido na tela
const resultado = document.getElementById("resultado");

// Formata um número para o padrão de moeda brasileira (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Opção 1 - Consultar dados da conta
function consultarDados() {
    resultado.innerHTML = `
        <p><strong>Nome:</strong> ${titular.nome}</p>
        <p><strong>Agência:</strong> ${titular.agencia}</p>
        <p><strong>Conta:</strong> ${titular.conta}</p>
    `;
}

// Opção 2 - Consultar saldo
function consultarSaldo() {
    resultado.innerHTML = `<p><strong>Saldo atual:</strong> ${formatarMoeda(saldo)}</p>`;
}

// Opção 3 - Realizar débito
function realizarDebito() {
    const valor = Number(prompt("Digite o valor do débito:"));

    if (!valor || valor <= 0) {
        resultado.innerHTML = `<p>Valor inválido!</p>`;
        return;
    }

    if (valor > saldo) {
        resultado.innerHTML = `<p>Saldo insuficiente para realizar esse débito!</p>`;
        return;
    }

    saldo -= valor;
    resultado.innerHTML = `
        <p>Débito de ${formatarMoeda(valor)} realizado com sucesso!</p>
        <p><strong>Novo saldo:</strong> ${formatarMoeda(saldo)}</p>
    `;
}

// Opção 4 - Realizar crédito
function realizarCredito() {
    const valor = Number(prompt("Digite o valor do crédito:"));

    if (!valor || valor <= 0) {
        resultado.innerHTML = `<p>Valor inválido!</p>`;
        return;
    }

    saldo += valor;
    resultado.innerHTML = `
        <p>Crédito de ${formatarMoeda(valor)} realizado com sucesso!</p>
        <p><strong>Novo saldo:</strong> ${formatarMoeda(saldo)}</p>
    `;
}

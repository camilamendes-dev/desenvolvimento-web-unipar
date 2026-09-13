// Importa o módulo readline para interação via terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Dados fixos do titular da conta
const titular = {
    nome: "Camila Mendes",
    agencia: "0001",
    conta: "123456-7"
};

// Saldo inicial da conta
let saldo = 1000;

// Formata um número para o padrão de moeda brasileira (R$)
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function exibirMenu() {
    console.log("\n===== BANCO DIGITAL =====");
    console.log("1 - Consultar dados da conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar débito");
    console.log("4 - Realizar crédito");
    console.log("5 - Sair");
    console.log("==========================");

    rl.question("Escolha uma opção: ", (opcao) => {
        tratarOpcao(opcao);
    });
}

function tratarOpcao(opcao) {
    switch (opcao) {
        case "1":
            consultarDados();
            break;
        case "2":
            consultarSaldo();
            break;
        case "3":
            realizarDebito();
            break;
        case "4":
            realizarCredito();
            break;
        case "5":
            console.log("\nEncerrando o sistema. Até logo!");
            rl.close();
            break;
        default:
            console.log("\nOpção inválida! Tente novamente.");
            exibirMenu();
            break;
    }
}

function consultarDados() {
    console.log("\n--- Dados da Conta ---");
    console.log(`Nome: ${titular.nome}`);
    console.log(`Agência: ${titular.agencia}`);
    console.log(`Conta: ${titular.conta}`);
    exibirMenu();
}

function consultarSaldo() {
    console.log(`\nSeu saldo atual é de ${formatarMoeda(saldo)}`);
    exibirMenu();
}

function realizarDebito() {
    rl.question("\nDigite o valor do débito: ", (resposta) => {
        const valor = parseFloat(resposta);

        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido!");
        } else if (valor > saldo) {
            console.log("Saldo insuficiente para realizar esse débito!");
        } else {
            saldo -= valor;
            console.log(`Débito de ${formatarMoeda(valor)} realizado com sucesso!`);
            console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
        }

        exibirMenu();
    });
}

function realizarCredito() {
    rl.question("\nDigite o valor do crédito: ", (resposta) => {
        const valor = parseFloat(resposta);

        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido!");
        } else {
            saldo += valor;
            console.log(`Crédito de ${formatarMoeda(valor)} realizado com sucesso!`);
            console.log(`Novo saldo: ${formatarMoeda(saldo)}`);
        }

        exibirMenu();
    });
}

exibirMenu();

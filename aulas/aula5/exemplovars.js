let nome;

const nomeNulo = null;


const aluno = {
    id: 123456789,
    nome: "Zezinho",
    ativo: true,
    pos: null,
    dataNascimento: new Date ("26/11/1998"),
    endereco:{
        rua: "Elias Abraao",
        numero: 2321,
        bairro: "Paulo Godoy",
        ciadade: "Cascavel"
    }
}

console.log(aluno);


const frutas = ["Banana", "Melão", "Uva"];
console.log(frutas);

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(20, 40));

const valor1 = "20";
const valor2 = 20;

if (valor1 == valor2);
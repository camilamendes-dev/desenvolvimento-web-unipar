const aluno = {
    nome: "Sandro",
    idade: 27,
    curso: "Eng. Soft",
    formado: true,
    pos: {
        formado: true,
        curso: "Docência Ens. Superior"
    } 
}

const aluno2 = {
    nome: "Pablo",
    idade: 20,
    curso: "Eng. Soft",
    formado: false,
    pos: undefined 
}

console.log("Tipos de referência")
console.log("Objetos")
console.log(aluno)
console.log(aluno2)

console.log("------------------------")

console.log("Lista")
const frutas = ["🍇", "🍊", "🍌", "🍉", "🍉"];
const alunos = [aluno, aluno2]

console.log(frutas)

function printarNome() {
    console.log("Sandrolaxx")
}

function somar(n1, n2) {
    return n1 + n2;
}

const resultado = somar(10, 15);

printarNome()
console.log("resultado", resultado)

function calcular(f1, f2) {
    return f1() + f2();
}

const result2 = calcular(() => 1 + 2, () => somar(7,0));

console.log(result2);

const vlr1 = "47";
const vlr2 = 47;

console.log("Apenas igual x igual:", vlr1 == vlr2 ? "SIM!" : "NÃO!");
console.log("igual x igual x igual:",vlr1 === vlr2 ? "SIM!" : "NÃO!");

// for (let index = 0; index < frutas.length; index++) {
//     const element = frutas[index];
    
//     console.log(element)
// }

frutas.forEach(fruta => console.log(fruta));

// Retorno explicito
// frutas.forEach(fruta => {
//     //processamento
//     return console.log(fruta);
// })

// const mapa = new Map();

// mapa.set("1", "Nome aleatório")
// mapa.set("2", "Nome aleatório 2")

const listaBananas = frutas.map(fruta => "🍌");
console.log(listaBananas)
console.log(frutas)

const apenasMelancias = frutas.filter(fruta => fruta != "🍉");

console.log(apenasMelancias)

const listaNumeros = [4, 6, 5, 10];

const total = listaNumeros.reduce((totalizador, valorAtual) => totalizador + valorAtual)

console.log(total)
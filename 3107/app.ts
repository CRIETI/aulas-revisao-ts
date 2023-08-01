import * as promptSync from 'prompt-sync';

const prompt = promptSync();

console.log("Batata frita");

let nome: string = "Juca Bala";
let idade: number = 23;
let salario: number = 1200.50;
let estaVivo: boolean = true;

console.log(nome + " tem " + idade + " anos, recebe R$ " + salario + " e seu estado de vida é: " + estaVivo);

let idadeDigitada: number = Number(prompt("Digite uma idade: "));

if(idade < idadeDigitada){
    console.log("Juca é mais novo, cuti cuti");
} else if (idade == idadeDigitada) {
    console.log("Mesma idade dos jovens");
} else {
    console.log("O Juca é mais velho");
}

for(let i: number = 0; i < 10; i++){
    console.log(i);
}

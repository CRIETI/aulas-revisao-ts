import { Person } from './Person';

let person: Person = new Person();
let person2: Person = new Person();

person.name = 'Batata';
person2.name = 'Batata2';
console.log(person.name);

let people: Person[] = [];
console.log(`Tamanho atual do vetor: ${people.push(person)}`);
people.push(person2);
console.log(`Tamanho do vetor: ${people.length}`);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.forEach(element => {
  console.log(element)
});

for (let p of people) {
  console.log(p);
}


function buscarCoisaNoBanco() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // let retorno = buscarCotacaoDoDolar();
      // if (retorno) {
      resolve({
        name: 'Christian'
      });
    }, 500);
    // } else {
    //   reject();
    // }
  });
}

function buscarCoisaNoBancoSemPromise() {
  return {
    name: 'Christian'
  }
}

async function main() {
  let retorno = await buscarCoisaNoBanco(); // espera função executar para depois continuar
  console.log(retorno);
}

main();
console.log("Fora do main: " + buscarCoisaNoBanco());
console.log(buscarCoisaNoBancoSemPromise());


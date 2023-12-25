import pergunta from 'readline-sync';


console.log('1 - Listar os salários minimos de 2010 à 2020');
console.log('2 - Listar os índice IPCA de 2010 à 2020');
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');

var escolha = pergunta.question('Digite o numero da sua escolha: ');

if (escolha > 3){
console.log('Por favor, digite uma opção valida.')
}
else {

};
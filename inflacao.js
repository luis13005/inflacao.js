import dado from 'readline-sync';

var array_salario = [
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020},
];

var array_inflacao = [
    {inflacao: 5.91, ano: 2010},
    {inflacao: 6.50, ano: 2011},
    {inflacao: 5.84, ano: 2012},
    {inflacao: 5.91, ano: 2013},
    {inflacao: 6.41, ano: 2014},
    {inflacao: 10.67, ano: 2015},
    {inflacao: 6.29, ano: 2016},
    {inflacao: 2.95, ano: 2017},
    {inflacao: 3.75, ano: 2018},
    {inflacao: 4.31, ano: 2019},
    {inflacao: 4.52, ano: 2020},
];

console.log('1 - Listar os slários minímos de 2010 à 2020');
console.log('2 - Listar o índice IPCA de 2010 à 2020');
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');

const opcao = dado.question('Digite o numero da sua escolha: ');

switch(Number(opcao)){

    case 1: 
        for (let salarios of array_salario){
            console.log('Ano: .............................'+salarios.ano);
            console.log('Salário mínimo: ..................R$ '+salarios.salario);
            
            console.log('');
        };
 	    break;

    case 2:

        for(let inflacao of array_inflacao){
            console.log('Ano: .............................'+inflacao.ano);
            console.log('Inflação IPCA: ...................'+inflacao.inflacao+'%');
    
            console.log('');
        };
        break;

    case 3:
        let i = 0;
        let i_aux = 0
        for(let inflacao of array_inflacao){
            let crescimento_aux = 0
            let salarios = array_salario[i];
            let salarios_aux = array_salario[i_aux];
            let crescimento = '-';

            if (salarios_aux.salario !== salarios.salario){
                
            let diferenca = salarios.salario - salarios_aux.salario;
          
            crescimento_aux = (diferenca / salarios_aux.salario) * 100;

            i_aux++;
            };
            
                
            console.log('Ano: .............................'+salarios.ano);
            console.log('Salário mínimo: ..................R$ '+salarios.salario.toString().replace('.',',')+',00');

            if (crescimento_aux != 0){

            console.log('Crescimento Salarioal:............'+crescimento_aux.toFixed(2).toString().replace('.',',')+'%');

            }else{
                console.log('Crescimento Salarial:............'+crescimento);
            }

            console.log('Inflação IPCA: ...................'+inflacao.inflacao.toFixed(2).toString().replace('.',',')+'%');
            console.log(' ')
            i++;
        };
        break;

    default:
    console.log('Selecione uma opção válida.');
};
    
/*

1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 
  
*/


let indice = 13;
let soma = 0;

for (let k = 1; k <= indice; k++){
  soma += k
}

console.log(soma)



console.log('______________________________________________________________________________________')
/*

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

*/

function pertenceFibonacci(numero){
  let a = 0, b = 1, temp;

  if (numero === a || numero === b){
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  }

  while (b < numero){
    temp = a + b;
    a = b;
    b = temp;
  }

  if (b === numero){
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  }else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}

console.log(pertenceFibonacci(13));
console.log(pertenceFibonacci(14));


console.log('_____________________________________________________________________________________')
/*

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 

*/

const faturamentoDiario = [
  { dia: 1, valor: 100 },
  { dia: 2, valor: 200 },
  { dia: 3, valor: 0 },  
  { dia: 4, valor: 150 },
  { dia: 5, valor: 300 },
  { dia: 6, valor: 0 },  
  { dia: 7, valor: 250 },
  { dia: 8, valor: 0 },  
  { dia: 9, valor: 400 },
  { dia: 10, valor: 350 },
  { dia: 11, valor: 0 }, 
  { dia: 12, valor: 500 },
  { dia: 13, valor: 0 }, 
  { dia: 14, valor: 600 },
  
];

// Função para calcular o menor, maior e dias acima da média
function calcularFaturamento(faturamento) {
  const valores = faturamento.map(f => f.valor).filter(v => v > 0); // Ignora valores 0

  if (valores.length === 0) {
      console.log("Não há dias com faturamento.");
      return;
  }

  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;

  const diasAcimaDaMedia = valores.filter(v => v > mediaMensal).length;

  console.log(`Menor faturamento: R$ ${menorValor}`);
  console.log(`Maior faturamento: R$ ${maiorValor}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento(faturamentoDiario);


console.log('_____________________________________________________________________________________')
/*

4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
•	SP – R$67.836,43 
•	RJ – R$36.678,66 
•	MG – R$29.229,88 
•	ES – R$27.165,48 
•	Outros – R$19.849,53 

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

*/

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calcula o faturamento total
const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcula e exibe o percentual de representação de cada estado
for (const estado in faturamento) {
  const percentual = (faturamento[estado] / totalFaturamento) * 100;
  console.log(`O percentual de representação de ${estado} é: ${percentual.toFixed(2)}%`);
}



console.log('_____________________________________________________________________________________')


/*

5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 

*/

function inverterString(str){
  let stringInvertida = '';


  for (let i = str.length -1; i >= 0; i--){
    stringInvertida += str[i];
  }

  return stringInvertida
}


let stringOriginal = 'Hello, World!';
let resultado = inverterString(stringOriginal);


console.log('String original:', stringOriginal)
console.log('String invertida:', resultado)


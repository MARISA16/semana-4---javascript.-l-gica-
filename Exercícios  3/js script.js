1./* Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante 
(Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);*/

/* Solicitando a letra do usuário
const letra = prompt('Digite uma letra do alfabeto.');

// Resolvendo com switch
switch (letra) {
    case 'a': // Colocamos os cases seguidos um do outro para economizar
    case 'e': // código, já que todos eles terão a mesma mensagem
    case 'i':
    case 'o':
    case 'u': 
        alert(`A letra ${letra} é uma vogal`);
        break; // Se não houver o break, o alert dentro de default tbm será mostrado
    default:
        alert(`A letra ${letra} é uma consoante`);
}*/

// Resolvendo com if
// Verificando o valor da constante letra
// || (pipe) significa ou
// Meu if quer dizer "Se letra igual a 'a' OU letra igual a 'e' ..."
/*const letra = prompt('digite sua letra de afalbeto');
if (letra === 'a'
    || letra === 'e'
    || letra === 'i'
    || letra === 'o'
    || letra === 'u') {
    alert(`A letra ${letra} é uma vogal`);
 } else { // Qualquer outra letra que não passar no teste do if, é uma consoante
     alert(`A letra ${letra} é uma consoante`);
 }*/

 /*2. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));

switch (diaSemana) {
    case 1:
        alert(`Domingo`);
        break;
    case 2:
        alert(`Segunda-Feira`);
        break;
    case 3:
        alert(`Terça-Feira`);
        break;
    case 4:
        alert(`Quarta-Feira`);
        break;
    case 5:
        alert(`Quinta-Feira`);
        break;
    case 6:
        alert(`Sexta-Feira`);
        break        
    case 7:
        alert(`Sábado`);
        break;
    default:
        alert(`Dia de São Nunca`);
}*/




//Questão6: O gerente ficou louco! E agora não sabe quanto de desconto deu nos seus produtos para fazer o anúncio. Ele sabe o preço sem o desconto e com o desconto. Faça um algoritmo que calcule o percentual de desconto do produto.
//1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);if
//const letra = prompt('digite sua letra');
//switch (letra){
    //case 'a':
     //case 'e':
      //case  'i':
        //case 'o':
        //case  'u':
    //alert(' A letra ${letra} é uma vogal'); 
    //break;
    //default:
        //alert('A letra ${letra} éuma consoante');
//}

    /*const letra = prompt('digite sua letra de afalbeto');
    if (letra === 'a'{
    
      ||letra === 'e' 
      ||letra === 'i' 
      ||letra === 'o' 
      ||letra === 'u') {
    alert(`A letra ${letra} é uma vogal`);
      } else 
    alert(`A letra ${letra} é uma consoante`);
}*/
/*3. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem;
   Resolução1
let numeroMes = prompt('Digite o número do mês (1-12)');
numeroMes = parseInt(numeroMes);

switch (numeroMes) {
    case 1:
        alert(`Janeiro é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 2:
        alert(`Fevereiro é o mês ${numeroMes} e possui 28 ou 29 dias`);
        break;
    case 3:
        alert(`Março é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 4:
        alert(`Abril é o mês ${numeroMes} e possui 30 dias`);
        break;
    case 5:
        alert(`Maio é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 6:
        alert(`Junho é o mês ${numeroMes} e possui 30 dias`);
        break;
    case 7:
        alert(`Julho é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 8:
        alert(`Agosto é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 9:
        alert(`Setembro é o mês ${numeroMes} e possui 30 dias`);
        break;
    case 10:
        alert(`Outubro é o mês ${numeroMes} e possui 31 dias`);
        break;
    case 11:
        alert(`Novembro é o mês ${numeroMes} e possui 30 dias`);
        break;
    case 12:
        alert(`Dezembro é o mês ${numeroMes} e possui 31 dias`);
        break;
    default:
        alert('Não é um mês conhecido');
}*/

  /*Resolução2 com (if)
let numeroMes = prompt('Digite o número do mês (1-12)');
numeroMes = parseInt(numeroMes);
 if (numeroMes === 1) {
    alert(`Janeiro é o mês ${numeroMes} e possui 31 dias`);
} else if (numeroMes === 2) {
    alert(`Fevereiro é o mês ${numeroMes} e possui 28 ou 29 dias`);
} else if (numeroMes === 3) {
    alert(`Março é o mês ${numeroMes} e possui 31 dias`);
} else if (numeroMes === 4) {
    alert(`Abril é o mês ${numeroMes} e possui 30 dias`);
} else if (numeroMes === 5) {
    alert(`Maio é o mês ${numeroMes} e possui 31 dias`);
} else if (numeroMes === 6) {
    alert(`Junho é o mês ${numeroMes} e possui 30 dias`);
} else if (numeroMes === 7) {
    alert(`Julho é o mês ${numeroMes} e possui 31 dias`);
}
 else if (numeroMes === 8) {
    alert(`Agosto é o mês ${numeroMes} e possui 31 dias`);
} else if (numeroMes === 9) {
    alert(`Setembro é o mês ${numeroMes} e possui 30 dias`);
} else if (numeroMes === 10) {
    alert(`Outubro é o mês ${numeroMes} e possui 31 dias`);
} else if (numeroMes === 11) {
    alert(`Novembro é o mês ${numeroMes} e possui 30 dias`);
} else if (numeroMes === 12) {
    alert(`Dezembro é o mês ${numeroMes} e possui 31 dias`);
} else {
    alert('Não é um mês conhecido');*/
    

   /* 4. Escreva um código que receba dois número e determine qual o maior entre eles;

const num1 = prompt('Digite o primeiro número:');
const num2 = prompt('Digite o segundo número:');

if (num1 > num2) {
    alert(`${num1} é maior que ${num2}`);
} else if (num1 === num2) {
    alert(`${num1} é igual a ${num2}`);
} else {
    alert(`${num2} é maior que ${num1}`);
}*/
//5. Escreva um código que receba um número e determine se ele é par ou ímpar, e se é negativo ou positivo;

//Se o número é par, ele é divisivél por dois (ex: 4%2 =0)
//Se o número é  impar, ele não é divisivél por dois (ex: 5%2!=0)
//Se o número for positivo é maior que zero
//Se o número for negativo é menor que zero

/*const numero = parseInt(prompt('Digite um número'));

if (numero % 2 === 0 && numero > 0) {
    alert(`${numero} é par, e ele é positivo`);
} else if (numero % 2 === 0 && numero < 0) {
    alert(`${numero} é par, e ele é negativo`);
} else if (numero % 2 !== 0 && numero > 0) {
    alert(`${numero} é impar, e ele é positivo`);
} else if (numero % 2 !== 0 && numero < 0) {
    alert(`${numero} é par, e ele é negativo`);
} else {
    alert(`${numero} é um número neutro`);
}*/
/*6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.
  Resolução1
const angulo1 = parseFloat(prompt('Digite o primeiro ângulo'));
const angulo2 = parseFloat(prompt('Digite o segundo ângulo'));
const angulo3 = parseFloat(prompt('Digite o terceiro ângulo'));

if(angulo1 + angulo2 + angulo3 === 180){
    alert('Os ângulos informados resultam num triângulo válido');
}else{
    alert('Os ângulos não resultam num triângulo válido');
}*/
 /*Resolução2 
const angulo1 = parseInt(prompt('digite seu primeiro ângulo'));
const angulo2 = parseInt(prompt('digite seu segundo ângulo'));
const angulo3 = parseInt(prompt('digite seu outro ângulo'));

if ( angulo1 + angulo2 + angulo3 ===180){
    alert(`é um triângulo valido`);

}else{
    alert( 'não é triângulo valido');
}*/
/*7. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.

const numero1 = parseInt(prompt('Digite o primeiro número'));
const numero2 = parseInt(prompt('Digite o segundo número'));

if (numero1 % numero2 === 0) {
    alert(`${numero1} é múltiplo de ${numero2}`);
} else if (numero2 % numero1 === 0) {
    alert(`${numero2} é múltiplo de ${numero1}`);
} else {
    alert(`${numero1} e ${numero2} não são múltiplos`);
}*/

//8. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)

/*const resultado = prompt('Quantos pontos seu time fez? Digite "v" para vitória, "e" para empate e "d" para derrota');

switch(resultado){
    case 'v':
        alert('Vitória!! Seu time fez três pontos');
        break;
    case 'e':
        alert('Empate. Seu time ganhou 1 ponto');
        break;
    case 'd':
        alert('Não foi dessa vez, você não conseguiu nenhum ponto');
        break;
    default:
        alert('Opção inválida');
}*/
//9. Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias:

/*Infantil A = 5-7 anos
Infantil B = 8-10 anos
Juvenil A = 11-13 anos
Juvenil B = 14-17 anos
Adulto = a partir de 18 anos*/

/*const idade = parseInt(prompt('Qual a idade do competidor?'));

if (idade >= 5 && idade <= 7) {
    alert('Competidor da categoria Infantil A');
 if (idade >= 8 && idade <= 10) {
} else
    alert('Competidor da categoria Infantil B');
if (idade >= 11 && idade <= 13) {
} else
    alert('Competidor da categoria Juvenil A');
 if (idade >= 14 && idade <= 17) {
} else
    alert('Competidor da categoria Juvenil B');
 if (idade >= 18) {
} else
    alert('Competidor da categoria Adulto');
} else {
    alert(`Alguém de ${idade} anos não pode competir`);{

    }*///Não esta abrindo


//10. Faça um algoritmo que dado um número, retorne a classificação do ângulo. (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°).

/*const angulo = parseFloat(prompt('Informe o ângulo desejado'));

if (angulo > 0 && angulo < 90) {
    alert(`${angulo}° é um ângulo agudo`);
} else if (angulo === 90) {
    alert(`${angulo}° é um ângulo reto`);
} else if (angulo > 90 && angulo < 180) {
    alert(`${angulo}° é um ângulo obtuso`);
} else if (angulo > 180 && angulo < 360) {
    alert(`${angulo}° é um ângulo côncavo`);
} else if (angulo === 0 || angulo === 180) {
    alert(`${angulo}° é um ângulo raso`);
} else if (angulo === 360) {
    alert(`${angulo}° é um ângulo completo`);
} else {
    alert(`Esse ângulo está além da compreensão`);*/

    /*Exercícios [menos] simples
1. Baseado na tabela abaixo, retorne a classificação de um produto.

Código  	Classificação
1            Alimento não-perecível
2,3 ou 4	 Alimento perecível
5 ou 6	     Vestuário
7            Higiene Pessoal
8 até 15	 Limpeza e Utensílios Domésticos
Qualqueroutro código    	Código inválido*/

/*const codigo = parseInt(prompt('Digite o código desejado'));

if (codigo === 1) {
    alert('Você escolheu alimento não-perecível');
} else if (codigo >= 2 && codigo <= 4) {
    alert('Você escolheu alimento perecível');
} else if (codigo === 5 || codigo === 6) {
    alert('Você escolheu vestuário');
} else if (codigo === 7) {
    alert('Você escolheu Higiene Pessoal');
} else if (codigo >= 8 && codigo <= 15) {
    alert('Você escolheu Limpeza e Utensílios Domésticos');
} else {
    alert('Código inválido');
}*/

/*2. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.

Código	 Produto	      Preço Unitário (R$)
100	   Cachorro quente        R$ 1,70
101	  Bauru Simples	          R$ 2,30
102	   Bauru com ovo	      R$ 2,60
103  	Hamburguer  	      R$ 2,40
104	   Cheeseburguer	      R$ 2,50
105	   Refrigerante	          R$ 1,00*/

/*const codigo = prompt('Qual é o código do produto (entre 100 a 105)?');
let preco;
let produto;

switch (codigo) {
    case '100':
        preco = 1.7;
        produto = 'Cachorro quente';
        break;
    case '101':
        preco = 2.3;
        produto = 'Bauru Simples';
        break;
    case '102':
        preco = 2.6;
        produto = 'Bauru com ovo';
        break;
    case '103':
        preco = 2.4;
        produto = 'Hamburguer';
        break;
    case '104':
        preco = 2.5;
        produto = 'Cheeseburguer';
        break;
    case '105':
        preco = 1;
        produto = 'Refrigerante';
        break;
    default:
         alert('Esse código não representa um produto válido no podrexxx.');
}

if (preco) {
    const quantidade = parseInt(prompt('Qual é a quantidade de produtos?'));
    alert(`Você escolheu ${quantidade} ${produto}(s), e o preço total é ${(preco * quantidade).toFixed(2)}`);
}*/





//7.. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.

//const a = parseInt(prompt('digite seu a'));
//const b = parseInt(prompt('digite seu b'))

//if(a==='27');{
   // alert('é um multiplico ');

//}else{
   // alert(`não é multiplico `);
//}
//estruturas de repetição
//Faça um algoritmo que imprima números inteiros de n a 1;

//const numero = parseInt(prompt('digite seu número'));
//for(let i = numero; i >= 1; i--){
  //  console.log(` ${i}`);
//}

//4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

//const numero = parseInt(prompt('digite seu numero'));
//for(let i = 1; i <=10; i++){
  //  console.log(numero*i);
//}
//2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (com while)

//let soma =0
//while( contador )


/*let resposta = prompt('Escolha uma das opções a seguir: \n\r(1) Mensagem de paz \n\r(2) Mensagem de incentivo \n\r(3) Mensagem de guerra \n\r(s) Sair');

while (resposta !== 's') {
    if (resposta === '1') {
        alert('#pas');
    } else if (resposta === '2') {
        alert('Gambatê!');
    } else if (resposta === '3') {
        alert('Se plante!');
    } else {
        alert('Opção desconhecida');
    }

    resposta = prompt('Escolha uma das opções a seguir: \n\r(1) Mensagem de paz \n\r(2) Mensagem de incentivo \n\r(3) Mensagem de guerra \n\r(s) Sair');
}*/
 
//6. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)

//const listanumero = [1, 2,3, 4, 5];
  //  for(let i =0; i < listanumero.length; i++){

//console.log(listanumero[i])
        

    //}

    /*7. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

const preço =1,99
let itens = 1, 
while{itens=50}*/

/*const codigo = prompt('Qual é o código do produto (entre 100 a 105)?');
let preco;
let produto;

switch (codigo) {
    case '100':
        preco = 1.7;
        produto = 'Cachorro quente';
        break;
    case '101':
        preco = 2.3;
        produto = 'Bauru Simples';
        break;
    case '102':
        preco = 2.6;
        produto = 'Bauru com ovo';
        break;
    case '103':
        preco = 2.4;
        produto = 'Hamburguer';
        break;
    case '104':
        preco = 2.5;
        produto = 'Cheeseburguer';
        break;
    case '105':
        preco = 1;
        produto = 'Refrigerante';
        break;
    default:
         alert('Esse código não representa um produto válido no podrexxx.');
}

if (preco) {
    const quantidade = parseInt(prompt('Qual é a quantidade de produtos?'));
    alert(`Você escolheu ${quantidade} ${produto}(s), e o preço total é ${(preco * quantidade).toFixed(2)}`);
}*/


/*var lista = ['a', 'c', 'Debora', 'abacate', 'Irmão do Jorel, Irmão do Jorel'];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    if (lista[i] == 'abacate') {
        alert(`Abacate na posição ${i}`);
        break;
    }
}*/
/*10. Escreva um algoritmo que printe o seguinte padrão no console:
1

22

333

4444

55555

for (let i = 1; i <= 5; i++) {
    console.log(i.toString().repeat(i))
}*/

/*18. Escreva um loop em Javascript que printa o seguinte padrão no console: 1******

12*****

123****

1234***

12345**

123456*

1234567(vou escrever de 1 á 7)*/


// let numeros = '';
// for (let i= 1; i <= 7; i++){
//    numeros+=i;
// console.log(`${numeros}${'*'.repeat(7-i)}`)
// }

/*let numeros = '';
for (let i= 1,j=6; i <= 7 &&j>=0; i++,j--){
   numeros+=i;
console.log(`${numeros}${'*'.repeat(j)}`)
}*/

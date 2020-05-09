// questão1 -Faça uma mensagem de "Olá Mundo!";

alert ("Olá, mundo");

// questão2- Faça uma saída de soma de 2 números;

const numero1 = prompt ("Digite um número");
const numero2 = prompt ("Digite outro número");
// questão3 :recebe o valor dos número;
const soma = parseInt(numero1) + parseInt(numero2);

alert('o resultado da conta ${numero1} + ${numero2} é ${soma}');

//alert('o resultado da conta' + numero1 + ' + ' + numero2 + ' é ' + soma);

//questão3- Crie um algoritmo que receba nome, endereço e telefone, e depois mostre-os;

const nome = prompt("quem?")
const endereco = prompt("seu endereço")
const telefone = prompt("telefone")

alert(`seu nome é ${nome} seu endereço é ${endereco} seu telefon é ${telefone}`)

// Quastão4 :Solicite o ano de nascimento do usuário, calcule sua idade e mostre-a;
//para sabermos a idade usamos a crase (``) na alert.

const ano = prompt("nascimento");
const idade = 2020 - parseInt(ano);
alert(`sua idade é ${idade}`);

// Quastão5 : Receba do usuários 3 números e calcule a média entre eles.
//mas se eu fizer assim: (2 + 3 ) / 2, vai fazer primeiro o que ta entre parenteses e depois faz a divisão
const numero1 = prompt("Digite um número");
const numero2 = prompt("Digite outro número");
const numero3 = prompt("Digite mais outro número");

const media = (parseInt(numero1) + parseInt (numero2) + parseInt (numero3)) /3;

alert(`media é ${media}`);

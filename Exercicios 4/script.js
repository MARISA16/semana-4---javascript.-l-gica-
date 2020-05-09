//alert('Olá Reprograma! Sou um js externo');

/*1 . Com base no exemplo do link do slide 1 (o que é javascript), crie um arquivo com um button, que ao clicar exiba a mensagem “Bem vindo ao Reprograma”. 
Obs. Utilize javascript externo.

2. Crie 3 variais, e exiba no console o tipo de cada uma, utilizando o typeof

3. Crie um botao, que ao ser clicado, exiba:
- 1 console.log()
- 1 console.error()
- 1 console.info()*/
//capturando o tag button
//let botao = document-queryselector('button');

//adicionando o evento de clique
//botao.addEventlis


let botao = document.querySelector('button');
console.log('botao')
botao.addEventListener('click', atualizarNome);

function atualizarNome() {
    alert('Bem vindo ao Reprograma')
}

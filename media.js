//criar referências aos elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário
    e.preventDefault();

    //obter os valores digitados
    const nome = frm.inNome.value; //variável nome que pega o nome q o usuário inseriu

    const nota1 = Number(frm.inNota1.value); //variável nota1 que pega o nome q o usuário inseriu e converte o retorno em String para um número

    const nota2 = Number(frm.inNota2.value); //variável nota2 que pega o nome q o usuário inseriu e converte o retorno em String para um número

    const media = (nota1 + nota2) / 2; //variavel media q armazena o resultado dessa conta

    resp1.innerText = `Média das Notas ${media.toFixed(2)}`;

    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "green";
    }

    else if (media >= 4){
        resp2.innerText = `Parabéns ${nome}! Você está de recuperação`;
        resp2.style.color = "blue";
    }

    else {
        resp2.innerText = `Parabéns ${nome}! Você foi reprovado(a)`;
        resp2.style.color = "red";
    }
})
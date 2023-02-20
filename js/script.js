// Ativar detalhe menu
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    if(location.href.includes(link.href)){
        link.classList.add('ativo');
        link.parentElement.classList.add('ativo');
    }
});

//Selecionar orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach(p => {
    const elemento = document.getElementById(p);
    if(elemento) {
        elemento.checked = true;
    }
});

//Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas-container button');

function mostrarResposta(e) {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativo');
    const ativo = resposta.classList.contains('ativo');
    pergunta.setAttribute('aria-expanded', ativo);
}

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', mostrarResposta);
});
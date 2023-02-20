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
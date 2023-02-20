const links = document.querySelectorAll('.menu a');
const lis = document.querySelectorAll('.menu li');

links.forEach(link => {
    if(location.href.includes(link.href)){
        link.classList.add('ativo');
        link.parentElement.classList.add('ativo');
    }
})
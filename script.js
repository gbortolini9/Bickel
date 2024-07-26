function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Imagens/menu-hamburguer.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "Imagens/cruz.png";
    }
}

const banner = document.getElementById('banner');
const imagens = ['Imagens/bickel_top.png', 'Imagens/bickel_foto_superior2.png', 'Imagens/bickel_foto_superior3.png', 'Imagens/banner-mercado-livre2.png'];
let index = 0;

function alternarImagem() {
    banner.style.backgroundImage = `url(${imagens[index]})`;
    index = (index + 1) % imagens.length;
}

setInterval(alternarImagem, 5000); // Altera a imagem a cada 5 segundos

// Inicia com a primeira imagem
alternarImagem();
// Obtenha os elementos DOM para o carrossel de imagens
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");
let imageIndex = 1,
    intervalId;
// Defina a função para iniciar o controle deslizante de imagem automático
const autoSlide = () => {
    // Inicie a apresentação de slides chamando slideImage() a cada 2 segundos
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Chamar a função autoSlide ao carregar a página
autoSlide();
// Uma função que atualiza a exibição do carrossel para mostrar a imagem especificada
const slideImage = () => {
    // Calcular o índice de imagem atualizado
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Atualizar a exibição do carrossel para mostrar a imagem especificada
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};
// Uma função que atualiza a exibição do carrossel para mostrar a próxima ou a anterior imagem
const updateClick = (e) => {
    // Pare a apresentação de slides automática
    clearInterval(intervalId);
    // Calcular o índice de imagem atualizado com base no botão clicado
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Reinicie a apresentação de slides automática
    autoSlide();
};
// Adicionar ouvintes de eventos aos botões de navegação
buttons.forEach((button) => button.addEventListener("click", updateClick));
// Adicione o ouvinte de evento mouseover ao elemento wrapper para interromper o deslizamento automático
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Adicione o ouvinte de evento mouseleave ao elemento wrapper para iniciar o deslizamento automático novamente
wrapper.addEventListener("mouseleave", autoSlide);
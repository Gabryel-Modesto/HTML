// Seleciona todas as imagens dentro de elementos com a classe "image-container"
const images = document.querySelectorAll(".image-container img");

// Cria um IntersectionObserver para observar quando as imagens entram na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        // Se o elemento ainda não está visível, não faz nada e retorna
        if (!entry.isIntersecting) return;

        // Pega a imagem que está visível
        const image = entry.target;

        // Substitui uma parte específica da URL da imagem, aumentando a resolução
        // De "&w=10&" (baixa resolução) para "&w=1000&" (alta resolução)
        image.src = image.src.replace("&w=10&", "&w=1000&");

        // Para evitar verificações desnecessárias, para de observar esta imagem após carregá-la
        observer.unobserve(image);
    });

}, {}); // Configuração vazia significa que ele usará as configurações padrão

// Adiciona todas as imagens ao observer para serem monitoradas
images.forEach((image) => {
    observer.observe(image);
});

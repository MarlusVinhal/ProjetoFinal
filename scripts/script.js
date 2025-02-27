// Aguarda o carregamento completo do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", function () { 

    // Função que exibe um certificado e esconde os outros
    function mostrarCertificado(id) {
        // Seleciona todos os elementos com a classe "certificado" e oculta cada um deles
        document.querySelectorAll('.certificado').forEach(cert => cert.style.display = 'none');

        // Exibe apenas o certificado que corresponde ao ID passado como argumento
        document.getElementById('certificado-' + id).style.display = 'block';
    }

    // Torna a função acessível globalmente, permitindo que seja chamada a partir do HTML
    window.mostrarCertificado = mostrarCertificado;
});

// Aguarda o carregamento completo do HTML novamente antes de executar a lógica de animação
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todas as seções da página
    const sections = document.querySelectorAll("section");

    // Define opções para o IntersectionObserver
    const options = {
        threshold: 0.2 // Define que o callback será acionado quando 20% da seção estiver visível
    };

    // Cria um observador para detectar quando uma seção entra na tela
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            // Se a seção estiver visível na tela, adiciona a classe "visible"
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    // Para cada seção da página:
    sections.forEach(section => {
        // Adiciona a classe "hidden" para escondê-la inicialmente
        section.classList.add("hidden");

        // Observa a seção para detectar quando ela entra na tela
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-container"); // Selecciona todos los carruseles

    carousels.forEach((carouselContainer) => {
        const carousel = carouselContainer.querySelector(".carousel"); // Carrusel específico
        const videos = carousel.querySelectorAll("video"); // Videos dentro del carrusel
        const prevButton = carouselContainer.querySelector(".prev"); // Botón previo
        const nextButton = carouselContainer.querySelector(".next"); // Botón siguiente
        const focusText = carouselContainer.parentElement.querySelector("#focus-text"); // Texto dinámico

        let currentSlide = 0; // Índice actual del carrusel
        const focusTexts = ["Foco Cercano", "Foco Medio", "Foco Lejano"]; // Textos dinámicos

        // Función para cambiar de slide
        function changeSlide(direction) {
            videos[currentSlide].pause(); // Pausa el video actual
            videos[currentSlide].style.display = "none"; // Oculta el video actual

            currentSlide = (currentSlide + direction + videos.length) % videos.length; // Calcula el índice del nuevo slide

            videos[currentSlide].style.display = "block"; // Muestra el nuevo video
            videos[currentSlide].play(); // Reproduce el nuevo video

            if (focusText) {
                focusText.textContent = focusTexts[currentSlide]; // Cambia el texto dinámico
            }
        }

        // Inicializa el carrusel
        videos.forEach((video, index) => {
            video.style.display = index === 0 ? "block" : "none"; // Muestra solo el primer video
        });
        videos[currentSlide].play(); // Reproduce el primer video

        // Eventos para los botones
        prevButton.addEventListener("click", () => changeSlide(-1));
        nextButton.addEventListener("click", () => changeSlide(1));
    });
});

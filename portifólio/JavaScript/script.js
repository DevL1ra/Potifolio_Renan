


// Animação no Menu Mobile//

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

     


// Animação no Img hover projetos//


document.querySelectorAll(".img-itens").forEach((item) => {
    item.addEventListener("mouseenter", function () {
        let textElement = this.querySelector(".typing-text");
        let text = textElement.dataset.text; // Obtém o texto armazenado no HTML
        textElement.innerHTML = ""; // Limpa o texto antes de começar

        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                textElement.innerHTML += text[i];
                i++;
                setTimeout(typeWriter, 100); // Ajuste a velocidade da digitação aqui
            }
        }

        typeWriter(); // Inicia a animação ao passar o mouse
    });
});




// Script para redirecionar o usuário para a página de "Obrigado.html"


function redirectToThankYou(event) {
    event.preventDefault(); // Impede o envio padrão

    // Captura os dados do formulário
    const form = event.target;
    const formData = new FormData(form);

    // Envia os dados via fetch
    fetch(form.action, {
        method: form.method,
        body: formData,
    }).then(response => {
        if (response.ok) {
            window.location.href = "obrigado.html"; // Redireciona após o envio
        } else {
            alert("Erro ao enviar o formulário. Tente novamente.");
        }
    }).catch(error => console.error("Erro:", error));
};




// Script para a animação do texto no footer
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelector(".animated-text").classList.add("show");
                }
            });
        },
        { threshold: 0.5 } // O footer precisa estar 50% visível para ativar a animação
    );

    const footer = document.querySelector("#footer"); // Seletor do footer
    if (footer) {
        observer.observe(footer);
    }
});



// Script para a animação do texto no  habilidades
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const itemWidth = items[0].getBoundingClientRect().width;
    let cloneCount = Math.ceil(window.innerWidth / itemWidth);
  
    // Clonar itens para efeito de loop contínuo
    items.forEach(item => {
      let clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  
    let scrollPosition = 0;
  
    function moveCarousel() {
      scrollPosition -= 1;
      if (scrollPosition <= -track.scrollWidth / 2) {
        scrollPosition = 0;
      }
      track.style.transform = `translateX(${scrollPosition}px)`;
    }
  
    setInterval(moveCarousel, 20); // Ajuste para controlar a velocidade
  });








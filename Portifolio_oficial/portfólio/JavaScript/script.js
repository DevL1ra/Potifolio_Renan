


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

// Script para a animação do flip card  no projeto
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.flip-card-inner');
  const buttons = document.querySelectorAll('.overlay-text button');

  buttons.forEach(button => {
      button.addEventListener('click', function (e) {
          e.stopPropagation();

          const card = this.closest('.flip-card-inner');
          cards.forEach(c => {
              if (c !== card) c.classList.remove('flipped');
          });

          card.classList.toggle('flipped');
      });
  });

  document.addEventListener('click', () => {
      cards.forEach(card => card.classList.remove('flipped'));
  });
});

// Script para a aparecer o hover no scrool do usuario no mobile em projeto

function handleAutoFlipOnScroll(entries) {
  entries.forEach(entry => {
    const card = entry.target;
    if (window.innerWidth <= 768) {
      if (entry.isIntersecting) {
        card.classList.add("is-flipped");
      } else {
        card.classList.remove("is-flipped");
      }
    }
  });
}

const observer = new IntersectionObserver(handleAutoFlipOnScroll, {
  threshold: 0.6,
});

document.querySelectorAll(".flip-card").forEach(card => {
  observer.observe(card);
});

// Opcional: mostrar dica visual no mobile
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    document.querySelectorAll(".flip-card").forEach(card => {
      const hint = document.createElement("div");
      hint.classList.add("hint-mobile");
      hint.textContent = "Deslize para ver mais";
      card.querySelector(".overlay")?.appendChild(hint);
    });
  }
});

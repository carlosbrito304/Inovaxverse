// Pega a div do carrossel
const carousel = document.querySelector('.carousel');

// Pausa a animação ao passar o mouse
carousel.addEventListener('mouseover', () => {
  carousel.style.animationPlayState = 'paused';
});

// Retoma a animação ao sair do hover
carousel.addEventListener('mouseout', () => {
  carousel.style.animationPlayState = 'running';
});

// Efeito de hover nos itens da lista
const listItems = document.querySelectorAll('.empresas-listas li');

listItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

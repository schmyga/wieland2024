const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('open');
});
window.addEventListener('DOMContentLoaded', function() {
  var marqueeElement = document.getElementById('marquee');
  var news = [
    { theme: '🔴Aktuell:', message: '06.09.2024 Sommerfest vor dem Firmengelände Wieland.' },
    { theme: '🔴', message: 'Fußball: 1. PLATZ FÜR DAS WIELAND TEAM' }
  ];

  var marqueeContent = '';
  news.forEach(function(item) {
    marqueeContent += <span class="marquee-theme">${item.theme}</span><span class="marquee-message">${item.message}</span> ;
  });

  marqueeElement.innerHTML = marqueeContent;
});

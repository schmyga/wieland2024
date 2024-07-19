 marqueeElement.innerHTML = marqueeContent;

  // Обработчик клика на меню-тоглер
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('show');
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var marqueeElement = document.getElementById('news-ticker');
  var news = [
    { theme: '🔴Aktuell:', message: '06.09.2024 Sommerfest vor dem Firmengelände Wieland.' },
    { theme: '🔴', message: 'Fußball: 1. PLATZ FÜR DAS WIELAND TEAM' }
  ];

  var marqueeContent = '';
  news.forEach(function(item) {
    marqueeContent += `<span class="marquee-theme">${item.theme}</span><span class="marquee-message">${item.message}</span>`;
  });

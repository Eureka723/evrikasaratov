document.addEventListener('DOMContentLoaded', function() {
    // Инициализация AOS
    AOS.init({
      duration: 800,
      once: true
    });
  
    // Плавный скролл для навигационных ссылок
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  // Прелоадер
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
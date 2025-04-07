// Прелоадер: скрытие после загрузки страницы
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("hidden");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Функция для активации анимаций при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .slide-in-up");
  const options = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

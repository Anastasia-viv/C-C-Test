AOS.init();

window.addEventListener("resize", function () {
  AOS.refresh();
});

const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');

// Открытие/закрытие меню при клике на бургер
burger.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Добавляем/удаляем класс active
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || burger.contains(event.target);
    
    if (!isClickInside) {
        sidebar.classList.remove('active'); // Убираем класс active, если клик вне меню и бургера
    }
});

AOS.init({
  offset: 120, // Начало анимации раньше или позже
  duration: 600, // Продолжительность анимации
  easing: 'ease-in-out', // Тип easing для плавности
  delay: 100 // Задержка перед началом анимации
});

/*  */
$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    $("#circularcursor").css({
      left: e.pageX,
      top: e.pageY,
    });
  });
});

/*  */

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  preloader.style.display = "none"; // Скрываем преаплоадер
  content.style.display = "block"; // Показываем контент
});

/*  */

const videoNode = document.querySelector("video");
videoNode.muted = false;

/* 0 */
let typed = new Typed("#typed", {
  // Тут id того блока, в которм будет анимация
  stringsElement: "#typed-strings", // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});
/* 1 */
let typed1 = new Typed("#typed1", {
  // Тут id того блока, в которм будет анимация
  stringsElement: "#typed-strings", // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});
/*2 */
let typed2 = new Typed("#typed2", {
  // Тут id того блока, в которм будет анимация
  stringsElement: "#typed-strings", // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});


document.querySelectorAll('.boxHover').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

AOS.init({
  disable: function () {
    return window.innerWidth < 455; // Отключить на экранах меньше 455px
  }
});

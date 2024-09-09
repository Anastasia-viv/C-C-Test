AOS.init();

/*  */
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });

  /*  */

  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    preloader.style.display = 'none'; // Скрываем преаплоадер
    content.style.display = 'block';   // Показываем контент
});

/*  */

const videoNode = document.querySelector('video')
videoNode.muted = false

/* 0 */
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true // Указываем, повторять ли анимацию
});
/* 1 */
let typed1 = new Typed('#typed1', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true // Указываем, повторять ли анимацию
});
/*2 */
let typed2 = new Typed('#typed2', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 70, // Скорость печати
  startDelay: 500, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: true // Указываем, повторять ли анимацию
});
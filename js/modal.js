const popupLinks = document.querySelectorAll('.popup-link'); // получаем все кнопки, которые открывают окно
const body = document.querySelector('body'); // получаем body - для блокировки скролла
const lockPadding = document.querySelectorAll('.lock-padding');

console.log(popupLinks)
console.log(body)
console.log(lockPadding)

let unlock = true; // чтобы не было двойных нажатий

const timeout = 400; // время анимации 	

// Получаем все ссылки открытия окна
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', ''); // получаем чистое имя ID
      const curentPopup = document.getElementById(popupName); // получаем сам ID
      popupOpen(curentPopup); // отправляем полученный элемент в функцию popupOpen
      e.preventDefault(); // сброс стандратного поведения
    });
  }
}


// Объекты которые будут Окно закрывать
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    })
  }
}


function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open'); // получаем открытый попап
    if (popupActive) { // если он существует
      popupClose(popupActive, false); // тогда закрыть его
    } else { // если такого нет 
      bodyLock(); // тогда блокируется скролл
    }
    curentPopup.classList.add('open'); // открываем попап 
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) { // если у нажатого объекта нету в родителях popup__content 
        popupClose(e.target.closest('.popup')); // тогда мы popup закрываем 
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}


function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';


  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }


  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}


document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

console.log("hello")
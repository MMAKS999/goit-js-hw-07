import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEr = document.querySelector('.gallery');

// Функція генерування розмітки масиву зображень
// зупинка стандартної поведінки браузера onclick="event.preventDefault()"
// onst link = document.querySelector('a'); // отримуємо посилання з документу
// link.addEventListener('click', function(event) {
//   event.preventDefault(); // зупиняємо стандартну поведінку браузера
// робимо власний код тут
// });
function createLi(array) {
  return array.reduce((acc, item) => `${acc} 
            <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()"> 
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
    </a>
    </li> `, '');
}
const LiErray = createLi(galleryItems);
// додавання в дом дерева
galleryEr.insertAdjacentHTML('beforeend', LiErray);

// навішування слухачів подій
let instance = null; // локальна зміна для збільшення області видимості instance

// функція Слухач події
function listHandler(e) {
  console.log(e.target);
  // перевірка натиску на картинку (обробник події e.target.tagName повертає імя  великими літерами!!!!!!!!)
  if (e.target.tagName === 'IMG') {
    const descripUrl = e.target.dataset.source; // присвоєння властивості по дата обєкту
    console.log(descripUrl);

    // Модуль створення модалього вікна
    instance = basicLightbox.create(`
     <img src=${descripUrl}  > `);

    instance.show();
    console.log(instance);
    // відслідковування клавіатури
    document.addEventListener('keydown', escHandler);
  }
}
// функція закривання
function closeModal() {
  instance.close();
  // Закінчення відслідковування клавіатури
  document.removeEventListener('keydown', escHandler);
}

function escHandler(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// визов функції події на натиск
galleryEr.addEventListener('click', listHandler);

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
function listHandler(e) {
  console.log(e.target);
  const descripUrl = e.target.dataset.source;
  console.log(descripUrl);
}
galleryEr.addEventListener('click', listHandler);

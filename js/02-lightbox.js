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
    <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()"> 
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
    </a>
    </li> `, '');
}
const LiErray = createLi(galleryItems);
// додавання в дом дерева
galleryEr.insertAdjacentHTML('beforeend', LiErray);

//  Додавання галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// gallery.on('show.simplelightbox', function () {
// // do something…
// });

// gallery.on('error.simplelightbox', function (e) {
// console.log(e); // some usefull information
// });

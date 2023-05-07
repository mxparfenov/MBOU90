// Создание слайдера изображений
const images = document.querySelectorAll('.slider__item .slider__line img'); // получение коллекции изображений
const sliderLine = document.querySelector('.slider__line'); // получение линии слайдера
let count = 0;
let width;

function init(){
    console.log('resize')
    width = document.querySelector('.slider__item').offsetWidth; // получение ширины слайдера
    sliderLine.style.width = width * images.length + 'px'; // присвоение линии слайдера ширины умноженной на количество изображений
    images.forEach( item => {
        item.style.width = width + 'px'; // присвоение всем изображениям слайдера одинаковой ширины
        item.style.height = 'auto';
    })
    console.log(width);
    rollSlider(); // Выполнение функции rollSlider в момент изменения размеров экрана
}

window.addEventListener('resize', init); // При изменениии размеров экрана вызывает функцию init
window.onload = function() {
    init();
};// Вызов функции init при загрузке страницы

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}); // при нажатии на кнопку .slider-prev перелистывает на предыдущее изображение
// если нажать кнопку находясь на первом изображении то появится последнее изображение

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}); // при нажатии на кнопку .slider-next перелистывает на следующее изображение
// если нажать кнопку находясь на последнем изображении то появится первое изображение

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
} // перемещает линию слайдера на необходимую ширину
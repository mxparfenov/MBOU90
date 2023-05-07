burgerIcon = document.querySelector('.wrapper .container .navigation .burger .burger_img');
burgerMenu = document.querySelector('.burger__menu'); // получение элемента Бургер Меню
burgerExit = document.querySelector('.burger__exit'); // получение кнопки Выход

burgerIcon.addEventListener('click', function(){
    burgerMenu.style.display = 'flex';
});

burgerExit.addEventListener('click', function(){
    burgerMenu.style.display = 'none';
});
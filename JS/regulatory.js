regionalButton = document.querySelector('.regionalBut');
federalButton = document.querySelector('.federalBut');

regional = document.querySelector('.regional');
federal = document.querySelector('.federal');

regionalButton.addEventListener('click', function(){
    regional.style.display = 'flex';
    federal.style.display = 'none';
});
federalButton.addEventListener('click', function(){
    regional.style.display = 'none';
    federal.style.display = 'flex';
});


SubsectionMenu = document.querySelector('.subsection__menu');
MenuExit = document.querySelector('.menu__exit');

SubsectionMenu.addEventListener('click', function(){
    document.querySelector('.subsection__menu__item').style.display = 'flex';
});
MenuExit.addEventListener('click', function(){
    Exitmenu();
});

function Exitmenu(){
    document.querySelector('.subsection__menu__item').style.display = 'none';
};

regionalMenu = document.querySelector('.regional-menu');
federalMenu = document.querySelector('.federal-menu');

regionalMenu.addEventListener('click', function(){
    regional.style.display = 'flex';
    federal.style.display = 'none';
    Exitmenu();
});
federalMenu.addEventListener('click', function(){
    regional.style.display = 'none';
    federal.style.display = 'flex';
    Exitmenu();
});
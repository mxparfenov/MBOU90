choirButton = document.querySelector('.choirBut');
theaterButton = document.querySelector('.theaterBut');
sportClubButton = document.querySelector('.sportClubBut');

choir = document.querySelector('.choir');
theater = document.querySelector('.theater');
sportClub = document.querySelector('.sportClub');

choirButton.addEventListener('click', function(){
    choir.style.display = 'flex';
    theater.style.display = 'none';
    sportClub.style.display = 'none';
});
theaterButton.addEventListener('click', function(){
    choir.style.display = 'none';
    theater.style.display = 'flex';
    sportClub.style.display = 'none';
});
sportClubButton.addEventListener('click', function(){
    choir.style.display = 'none';
    theater.style.display = 'none';
    sportClub.style.display = 'flex';
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

choirMenu = document.querySelector('.choir-menu');
theaterMenu = document.querySelector('.theater-menu');
sportClubMenu = document.querySelector('.sportClub-menu');

choirMenu.addEventListener('click', function(){
    choir.style.display = 'flex';
    theater.style.display = 'none';
    sportClub.style.display = 'none';
    Exitmenu();
});
theaterMenu.addEventListener('click', function(){
    choir.style.display = 'none';
    theater.style.display = 'flex';
    sportClub.style.display = 'none';
    Exitmenu();
});
sportClubMenu.addEventListener('click', function(){
    choir.style.display = 'none';
    theater.style.display = 'none';
    sportClub.style.display = 'flex';
    Exitmenu();
});
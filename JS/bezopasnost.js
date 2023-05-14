terrorizmButton = document.querySelector('.terrorizm');
profilaktikaButton = document.querySelector('.profilaktika');
roditelyamButton = document.querySelector('.roditelyamBut');
medpageButton = document.querySelector('.medPageBut');
helpfulVideoButton = document.querySelector('.helpfulVideoBut');
grazdOboronaButton = document.querySelector('.grazdOboronaBut');
eventsButton = document.querySelector('.eventsBut');

terrorizm = document.querySelector('.bezopasnost__terorizm');
profilaktika = document.querySelector('.profilaktika-travm');
roditelyam = document.querySelector('.roditelyam');
medpage = document.querySelector('.med-page');
helpfulVideo = document.querySelector('.helpful-video');
grazdOborona = document.querySelector('.grazdanskaya-oborona');
events = document.querySelector('.events');

terrorizmButton.addEventListener('click', function(){
    terrorizm.style.display = 'flex';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
});
profilaktikaButton.addEventListener('click', function(){
    profilaktika.style.display = 'flex';
    terrorizm.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
});
roditelyamButton.addEventListener('click', function(){
    roditelyam.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
});
medpageButton.addEventListener('click', function(){
    medpage.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
});
helpfulVideoButton.addEventListener('click', function() {
    helpfulVideo.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    events.style.display = 'none';
});
grazdOboronaButton.addEventListener('click', function() {
    grazdOborona.style.display = 'flex';
    helpfulVideo.style.display = 'none';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    events.style.display = 'none';
});
eventsButton.addEventListener('click', function() {
    events.style.display = 'flex';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
});


// Меню для экранов меньше 768 пикселей

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

terrorizmButtonMenu = document.querySelector('.terrorizm-menu');
profilaktikaButtonMenu = document.querySelector('.profilaktika-menu');
roditelyamButtonMenu = document.querySelector('.roditelyamBut-menu');
medpageButtonMenu = document.querySelector('.medPageBut-menu');
helpfulVideoButtonMenu = document.querySelector('.helpfulVideoBut-menu');
grazdOboronaButtonMenu = document.querySelector('.grazdOboronaBut-menu');
eventsButtonMenu = document.querySelector('.eventsBut-menu');

terrorizmButtonMenu.addEventListener('click', function(){
    terrorizm.style.display = 'flex';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
profilaktikaButtonMenu.addEventListener('click', function(){
    profilaktika.style.display = 'flex';
    terrorizm.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
roditelyamButtonMenu.addEventListener('click', function(){
    roditelyam.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
medpageButtonMenu.addEventListener('click', function(){
    medpage.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
helpfulVideoButtonMenu.addEventListener('click', function() {
    helpfulVideo.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    grazdOborona.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
grazdOboronaButtonMenu.addEventListener('click', function() {
    grazdOborona.style.display = 'flex';
    helpfulVideo.style.display = 'none';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    events.style.display = 'none';
    Exitmenu();
});
eventsButtonMenu.addEventListener('click', function() {
    events.style.display = 'flex';
    grazdOborona.style.display = 'none';
    helpfulVideo.style.display = 'none';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
    Exitmenu();
});
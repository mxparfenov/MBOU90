terrorizmButton = document.querySelector('.terrorizm');
profilaktikaButton = document.querySelector('.profilaktika');
roditelyamButton = document.querySelector('.roditelyamBut');
medpageButton = document.querySelector('.medPageBut');
helpfulVideoButton = document.querySelector('.helpfulVideoBut');

terrorizm = document.querySelector('.bezopasnost__terorizm');
profilaktika = document.querySelector('.profilaktika-travm');
roditelyam = document.querySelector('.roditelyam');
medpage = document.querySelector('.med-page');
helpfulVideo = document.querySelector('.helpful-video');

terrorizmButton.addEventListener('click', function(){
    terrorizm.style.display = 'flex';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
});
profilaktikaButton.addEventListener('click', function(){
    profilaktika.style.display = 'flex';
    terrorizm.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
});
roditelyamButton.addEventListener('click', function(){
    roditelyam.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    medpage.style.display = 'none';
});
medpageButton.addEventListener('click', function(){
    medpage.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
});
helpfulVideoButton.addEventListener('click', function() {
    helpfulVideo.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
    medpage.style.display = 'none';
});
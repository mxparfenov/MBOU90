terrorizmButton = document.querySelector('.terrorizm');
profilaktikaButton = document.querySelector('.profilaktika');
roditelyamButton = document.querySelector('.roditelyamBut')

terrorizm = document.querySelector('.bezopasnost__terorizm');
profilaktika = document.querySelector('.profilaktika-travm');
roditelyam = document.querySelector('.roditelyam')

terrorizmButton.addEventListener('click', function(){
    terrorizm.style.display = 'flex';
    profilaktika.style.display = 'none';
    roditelyam.style.display = 'none';
});
profilaktikaButton.addEventListener('click', function(){
    profilaktika.style.display = 'flex';
    terrorizm.style.display = 'none';
    roditelyam.style.display = 'none';
});
roditelyamButton.addEventListener('click', function(){
    roditelyam.style.display = 'flex';
    terrorizm.style.display = 'none';
    profilaktika.style.display = 'none';
})
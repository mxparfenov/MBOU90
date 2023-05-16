vospitButton = document.querySelector('.vospitBut');
psichoButton = document.querySelector('.psichoBut');
hobbyGroupButton = document.querySelector('.hobbyGroupBut');
selfManagementButton = document.querySelector('.selfManagementBut');
movementButton = document.querySelector('.movementBut');

vospit = document.querySelector('.vospit');
psicho = document.querySelector('.psicho');
hobbyGroup = document.querySelector('.hobby-group');
selfManagement = document.querySelector('.self-management');
movement = document.querySelector('.movement');

vospitButton.addEventListener('click', function(){
    vospit.style.display = 'flex';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
});
psichoButton.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'flex';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
});
hobbyGroupButton.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'flex';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
});
selfManagementButton.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'flex';
    movement.style.display = 'none';
});
movementButton.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'flex';
});

// Меню для экранов меньше 768 пикселей

vospitMenu = document.querySelector('.vospit-menu');
hobbyGroupMenu = document.querySelector('.hobbyGroup-menu');
selfManagementMenu = document.querySelector('.selfManagement-menu');
psichoMenu = document.querySelector('.psicho-menu');
movementMenu = document.querySelector('.movement-menu');

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

vospitMenu.addEventListener('click', function(){
    vospit.style.display = 'flex';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
    Exitmenu();
});
psichoMenu.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'flex';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
    Exitmenu();
});
hobbyGroupMenu.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'flex';
    selfManagement.style.display = 'none';
    movement.style.display = 'none';
    Exitmenu();
});
selfManagementMenu.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'flex';
    movement.style.display = 'none';
    Exitmenu();
});
movementMenu.addEventListener('click', function(){
    vospit.style.display = 'none';
    psicho.style.display = 'none';
    hobbyGroup.style.display = 'none';
    selfManagement.style.display = 'none';
    movement.style.display = 'flex';
    Exitmenu();
});
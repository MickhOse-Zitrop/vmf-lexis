// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Москва' ? 'Moskva' : 'Москва';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Guards missile cruiser, part of the Black Sea Fleet of the Russian Navy. Flagship of the Black Sea Fleet. It is intended for the destruction of large surface enemy ships, providing support for anti-submarine groups. The cruiser can conduct air defense of long-range formations, support the landing party with fire.' ? 'Гвардейский ракетный крейсер, в составе Черноморского флота ВМФ России. Флагман Черноморского флота. Предназначается для поражения крупных надводных вражеских кораблей, обеспечения поддержки противолодочных групп. Крейсер может вести противовоздушную оборону дальних соединений, поддерживать огнем десант.' : 'Guards missile cruiser, part of the Black Sea Fleet of the Russian Navy. Flagship of the Black Sea Fleet. It is intended for the destruction of large surface enemy ships, providing support for anti-submarine groups. The cruiser can conduct air defense of long-range formations, support the landing party with fire.';
});


// All

function help(){
    document.getElementById('help-button').hidden = true;
    document.getElementById('help-window').style.display = 'block';
    document.getElementById('close-button').style.display = 'block';
}
function close_help(){
    document.getElementById('help-window').style.display = 'none';
    document.getElementById('close-button').style.display = 'none';
}

// translate button

document.getElementById('translate__button__construction').addEventListener('click', function(){
    document.getElementById('ru__construction').style.display = document.getElementById('ru__construction').style.display == 'none' ? 'block' : 'none';
    document.getElementById('en__construction').style.display = document.getElementById('en__construction').style.display == 'block' ? 'none' : 'block';
});

document.getElementById('translate__button__history').addEventListener('click', function(){
    document.getElementById('ru__history').style.display = document.getElementById('ru__history').style.display == 'none' ? 'block' : 'none';
    document.getElementById('en__history').style.display = document.getElementById('en__history').style.display == 'block' ? 'none' : 'block';
});
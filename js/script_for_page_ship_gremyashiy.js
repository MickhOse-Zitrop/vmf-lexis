// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Гремящий' ? 'Gremyashiy' : 'Гремящий';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Multipurpose corvette in the Pacific Fleet of the Russian Federation. It has navigation, radar, electronic equipment, conventional and anti-aircraft artillery installations, missile and anti-submarine weapons. The aviation group includes the Ka-27PL anti-submarine helicopter.' ? 'Многоцелевой корвет в составе Тихоокеанского флота РФ. Имеет навигационное, радиолокационное, радиоэлектронное оснащение, обычную и зенитную артиллерийские установки, ракетное и противолодочное вооружение. В авиационную группу входит противолодочный вертолет Ка-27ПЛ.' : 'Multipurpose corvette in the Pacific Fleet of the Russian Federation. It has navigation, radar, electronic equipment, conventional and anti-aircraft artillery installations, missile and anti-submarine weapons. The aviation group includes the Ka-27PL anti-submarine helicopter.';
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
// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Сообразительный' ? 'Soobrazitelnyy' : 'Сообразительный';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'The corvette belongs to the Baltic Fleet. It is equipped with radar, electronic, artillery, anti-aircraft and missile weapons. It is armed with torpedo tubes to fight submarines. There is also an aviation group.' ? 'Корвет в составе Балтийского флота. Есть радиолокационное, радиоэлектронное вооружение, артиллерийское, зенитное и ракетное. Торпедные аппараты для борьбы с подлодками и авиационная группа.' : 'The corvette belongs to the Baltic Fleet. It is equipped with radar, electronic, artillery, anti-aircraft and missile weapons. It is armed with torpedo tubes to fight submarines. There is also an aviation group.';
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

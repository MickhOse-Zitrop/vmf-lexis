// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Татарстан' ? 'Tatarstan' : 'Татарстан';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Soviet and Russian patrol ship, armed with guided missiles. It is designed to perform various tasks: finding and combating air, surface and underwater targets. It can carry out patrol duty, escorting, water protection in the economic zone. The ship is armed with anti-aircraft, artillery installations.' ? 'Советский и российский сторожевой корабль, с вооружением управляемыми ракетами. Предназначен для выполнения разных задач: нахождения и борьбы с воздушными, надводными и подводными целями. Может нести дозорную службу, конвоирование, охрану вод в экономической зоне. На вооружении корабля зенитные, артиллерийские установки.' : 'Soviet and Russian patrol ship, armed with guided missiles. It is designed to perform various tasks: finding and combating air, surface and underwater targets. It can carry out patrol duty, escorting, water protection in the economic zone. The ship is armed with anti-aircraft, artillery installations.';
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
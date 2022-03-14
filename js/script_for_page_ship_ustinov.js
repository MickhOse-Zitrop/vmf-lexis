// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Маршал Устинов' ? 'Marshal Ustinov' : 'Маршал Устинов';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Soviet and then Russian missile cruiser for operation in the sea and ocean zones. It is part of the Northern Fleet. Armament: cannon and anti-aircraft artillery, missiles, torpedoes, jet naval bomb. The aviation group consists of 1 Ka-27 helicopter.' ? 'Советский и затем российский ракетный крейсер морской и океанской зоны, в составе Северного флота. Вооружение: пушечная и зенитная артиллерия, ракеты, торпеды, реактивный морской бомбомет. Авиационная группа состоит из 1 вертолета Ка-27.' : 'Soviet and then Russian missile cruiser for operation in the sea and ocean zones. It is part of the Northern Fleet. Armament: cannon and anti-aircraft artillery, missiles, torpedoes, jet naval bomb. The aviation group consists of 1 Ka-27 helicopter.';
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

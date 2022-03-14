// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Адмирал Флота Советского Союза Кузнецов' ? 'Admiral of the Fleet of the Soviet Union Kuznetsov' : 'Адмирал Флота Советского Союза Кузнецов';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'The flagship of the Russian Navy and the Northern Fleet, the only aircraft carrier in the fleet. It can hit large enemy targets located above the water, protect naval combat formations from attacks in which aircraft carriers and submarines can be used. Supports landing operations.' ? 'Флагман ВМС России и Северного флота, единственный во флоте авианесущий корабль. Может поражать большие цели противника, находящиеся над водой, осуществлять защиту морских боевых соединений от нападений, в которых могут быть использованы авианосцы и подводные лодки. Поддерживает десантные операции.' : 'The flagship of the Russian Navy and the Northern Fleet, the only aircraft carrier in the fleet. It can hit large enemy targets located above the water, protect naval combat formations from attacks in which aircraft carriers and submarines can be used. Supports landing operations.';
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

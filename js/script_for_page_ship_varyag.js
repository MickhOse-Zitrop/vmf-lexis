// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Варяг' ? 'Varyag' : 'Варяг';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Flagship of the Pacific Fleet, Guards missile cruiser. The anti-ship armament consists of 16 launchers, the anti-submarine armament consists of 2 torpedo tubes, jet bomb launchers. There is an anti-submarine helicopter, anti-aircraft guns.' ? 'Флагман Тихоокеанского флота, гвардейский ракетный крейсер. Вооружение: противокорабельное состоит из 16 пусковых установок, противолодочное из 2 торпедных аппаратов, реактивных бомбовых установок. Есть противолодочный вертолет, зенитные установки.' : 'Flagship of the Pacific Fleet, Guards missile cruiser. The anti-ship armament consists of 16 launchers, the anti-submarine armament consists of 2 torpedo tubes, jet bomb launchers. There is an anti-submarine helicopter, anti-aircraft guns.';
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

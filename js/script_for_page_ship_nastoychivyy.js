// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Настойчивый' ? 'Nastoychivyy' : 'Настойчивый';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Destroyer squadron, flagship of the Baltic Fleet. Purpose: destruction of ground targets, air defense facilities, equipment and enemy manpower. It can perform fire support for landing troops at the landing site, transport and landing ships. Destroy surface ships, means for landing enemy troops. It can patrol and carry out combat service together with other forces of the front.' ? 'Эскадренный миноносец, флагман Балтийского флота. Назначение: уничтожение наземных целей, объектов ПВО, техники и живой силы противника. Может выполнять огневую поддержку десанта на месте высадки, транспорта и десантных кораблей. Уничтожать надводные корабли, средств для высадки десанта противника. Может патрулировать и нести боевую службу вместе с прочими силами фронта.' : 'Destroyer squadron, flagship of the Baltic Fleet. Purpose: destruction of ground targets, air defense facilities, equipment and enemy manpower. It can perform fire support for landing troops at the landing site, transport and landing ships. Destroy surface ships, means for landing enemy troops. It can patrol and carry out combat service together with other forces of the front.';
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
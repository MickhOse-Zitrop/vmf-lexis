// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Адмирал Чабаненко' ? 'Admiral Chabanenko' : 'Адмирал Чабаненко';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'A multi-purpose frigate with missile armament, belongs to the Northern Fleet of Russia. In service are automatic guns, anti-aircraft guns, cruise missiles, 8 torpedoes, mines. There is a hydroacoustic complex, electronic weapons, target detection systems, navigation, warnings about laser irradiation. The aviation group consists of 2 anti-submarine helicopters. Large and powerful ships, surface and underwater, form the basis of the military fleet. They have modern weapons, systems that allow them to detect enemy means, not to be detected themselves and conduct combat operations.' ? 'Многоцелевой фрегат с ракетным вооружением, принадлежит Северному флоту России. На вооружении находятся автоматические пушки, зенитные установки, крылатые ракеты, 8 торпед, мины. Есть гидроакустический комплекс, радиоэлектронное вооружение, системы обнаружения целей, навигационная, предупреждения о лазерном облучении. Авиационная группа состоит из 2 противолодочных вертолетов. Крупные и мощные корабли, надводные и подводные, составляют основу военного флота. У них современное оружие, системы, позволяющие обнаруживать средства противника, самим не быть обнаруженными и вести боевые действия.' : 'A multi-purpose frigate with missile armament, belongs to the Northern Fleet of Russia. In service are automatic guns, anti-aircraft guns, cruise missiles, 8 torpedoes, mines. There is a hydroacoustic complex, electronic weapons, target detection systems, navigation, warnings about laser irradiation. The aviation group consists of 2 anti-submarine helicopters. Large and powerful ships, surface and underwater, form the basis of the military fleet. They have modern weapons, systems that allow them to detect enemy means, not to be detected themselves and conduct combat operations.';
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
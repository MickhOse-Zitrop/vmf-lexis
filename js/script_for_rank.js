// Rank

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Звания' ? 'Ranks' : 'Звания';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Военно-морской флот Российской Федерации унаследовал звания советского Военно-морского флота, хотя знаки различия и форма были слегка изменены. Военно-морской флот в основном использует звания военно-морского образца, но также использует звания армейского образца для некоторых специализаций, включая военно-морскую авиацию, морскую пехоту, медицинскую и юридическу.' ? 'The Navy of the Russian Federation inherited the ranks of the Soviet Navy, although the insignia and uniform were slightly altered. The Navy mostly uses naval-style ranks but also uses army-style ranks for some specializations, including naval aviation, marine infantry, medical and legal.' : 'Военно-морской флот Российской Федерации унаследовал звания советского Военно-морского флота, хотя знаки различия и форма были слегка изменены. Военно-морской флот в основном использует звания военно-морского образца, но также использует звания армейского образца для некоторых специализаций, включая военно-морскую авиацию, морскую пехоту, медицинскую и юридическу.';
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

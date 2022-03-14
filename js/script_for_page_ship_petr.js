// Home

document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Пётр Великий' ? 'Pyotr Velikiy' : 'Пётр Великий';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Nuclear-powered heavy cruiser. The world`s largest operational warship, not an aircraft carrier. It is 250 m long, 25 m wide, 59 m high, and has a displacement of more than 23 tons. Power plant – 2 nuclear reactors, there are 2 auxiliary boilers, 2 turbines and 4 power plants, 4 steam turbine generators and gas turbine generators, 2 propeller shafts. It is capable of developing the speed of 32 knots. The ship is designed to function autonomously for up to 60 days. This period is limited by the amount of food supplies. The ship can sail without refueling for up to 3 years and is capable to hit large targets located above water; it can protect naval formations from the air attacks and from the submarine attacks. It has an unlimited cruising range, the equipment includes cruise missiles with a flight range of more than 600 km.' ? 'Атомный тяжелый крейсер. Наибольший в мире действующий боевой корабль, не авианосец. В длину 250 м, в ширину 25 м, высота 59 м, водоизмещение более 23 тонн. Силовая установка – 2 ядерных реактора, есть 2 вспомогательных котла, 2 турбины и 4 электростанции, по 4 паротурбогенератора и газотурбогенератора, 2 гребных вала. Способен развивать скорость 32 узла. В автономном плавании может находиться до 60 суток, этот срок ограничен объемом запасов продовольствия, 3 года может не пополнять топливо. Корабль может поражать крупные цели, находящиеся над водой, защищать морские соединения от нападения с воздуха и от атак подлодок. Имеет неограниченную дальность плавания, в оснащение входят крылатые ракеты, дальность полета которых составляет более 600 км.' : 'Nuclear-powered heavy cruiser. The world`s largest operational warship, not an aircraft carrier. It is 250 m long, 25 m wide, 59 m high, and has a displacement of more than 23 tons. Power plant – 2 nuclear reactors, there are 2 auxiliary boilers, 2 turbines and 4 power plants, 4 steam turbine generators and gas turbine generators, 2 propeller shafts. It is capable of developing the speed of 32 knots. The ship is designed to function autonomously for up to 60 days. This period is limited by the amount of food supplies. The ship can sail without refueling for up to 3 years and is capable to hit large targets located above water; it can protect naval formations from the air attacks and from the submarine attacks. It has an unlimited cruising range, the equipment includes cruise missiles with a flight range of more than 600 km.';
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

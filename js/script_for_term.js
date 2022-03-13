// Home


document.getElementById('main-block__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Термины' ? 'Terms' : 'Термины';
});
document.getElementById('main-block__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'The content of this page covers basic naval terminology which is necessary for international military environment. Its main objective is to equip the military students with vocabulary development.' ? 'Содержание этой страницы охватывает базовую военно-морскую терминологию, необходимую для международного военного взаимодействия. Его основная цель -  развитие словарного запаса студентов-военнослужащих .' : 'The content of this page covers basic naval terminology which is necessary for international military environment. Its main objective is to equip the military students with vocabulary development.';
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

var table, rows, switching, i, x, y, shouldSwitch;
table = document.getElementById("myTable");
switching = true;
while (switching) {
switching = false;
rows = table.getElementsByTagName("TR");
for (i = 1; i < (rows.length - 1); i++) {
  shouldSwitch = false;
  x = rows[i].getElementsByTagName("TD")[0];
  y = rows[i + 1].getElementsByTagName("TD")[0];
  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    shouldSwitch = true;
    break;
  }
}
if (shouldSwitch) {
  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  switching = true;
}
}
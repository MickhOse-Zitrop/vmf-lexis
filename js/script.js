// Home

document.getElementById('info__title').addEventListener('click', function(){
    this.textContent = this.textContent == 'Вступление' ? 'Introduction' : 'Вступление';
});
document.getElementById('info__text').addEventListener('click', function(){
    this.textContent = this.textContent == 'Этот сайт предназначен для ознакомления с базовыми специализированными знаниями и соответствующей военно-морской терминологией для людей, которые являются или хотят стать военно-морскими профессионалами. Его основная цель - обучить военных студентов лингвистическим навыкам, таким как понимание прочитанного, развитие словарного запаса. Сайт предлагает четыре раздела, каждый из которых охватывает такие темы, как звания российского военно-морского флота, российские военно-морские корабли, специфическая военно-морская терминология. Предоставлена актуальная информацию на двух языках - русском и английском, а также примеры произношения, для удобства ознакомления с конкретной военной терминологией и информацией, относящейся к конкретному вопросу.' ? 'This site is intended to provide basic specialized knowledge and relevant naval terminology for people who are or want to become naval professionals. Its main goal is to teach military students linguistic skills, such as reading comprehension, vocabulary development. The site offers four sections, each of which covers topics such as the ranks of the Russian Navy, Russian naval ships, and specific naval terminology. Up-to-date information is provided in two languages - Russian and English, as well as pronunciation examples, for the convenience of familiarization with specific military terminology and information related to a specific issue.' : 'Этот сайт предназначен для ознакомления с базовыми специализированными знаниями и соответствующей военно-морской терминологией для людей, которые являются или хотят стать военно-морскими профессионалами. Его основная цель - обучить военных студентов лингвистическим навыкам, таким как понимание прочитанного, развитие словарного запаса. Сайт предлагает четыре раздела, каждый из которых охватывает такие темы, как звания российского военно-морского флота, российские военно-морские корабли, специфическая военно-морская терминология. Предоставлена актуальная информацию на двух языках - русском и английском, а также примеры произношения, для удобства ознакомления с конкретной военной терминологией и информацией, относящейся к конкретному вопросу.';
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

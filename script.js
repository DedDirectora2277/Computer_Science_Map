menu.onclick = function myMenu(){
    // Присваивание элемнта по ID
    var x = document.getElementById('myTopnav');

    // Проверка класса элемента
    if(x.className === 'topnav'){
        // Добавление класса
        x.className += ' responsive';
    } else{
        x.className = 'topnav';
    }
}
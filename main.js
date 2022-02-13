'use strict';
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла              --------------
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -  
возвращаем пользователя к вопросам опять
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

const numberOffFilms = +prompt('How mach film do you have watched?', '');
let personalMovieDB = {
    'count': numberOffFilms,
    'movies': {},
    'actor': {},
    'genres': [],
    'private': false
};

for (let i = 0; i < 2; i++) {
    personalMovieDB.movies[prompt('One of the last seen movies', '')] = prompt('How mach you score this', '');
    if (personalMovieDB.movies == null) {
        
    }
}

console.log(personalMovieDB);
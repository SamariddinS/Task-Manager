'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'*/

const numberOffFilms = +prompt('How mach film do you have watched?', '');

/*
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false*/

let personalMovieDB = {
    'count': numberOffFilms,
    'movies': {},
    'actor': {},
    'genres': [],
    'private': false
};

/*
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

for (let i = 0; i < 2; i++) {
    personalMovieDB.movies[prompt('One of the last seen movies', '')] = prompt('How mach you score this', '');
};

console.log(personalMovieDB.movies);
console.log(personalMovieDB);
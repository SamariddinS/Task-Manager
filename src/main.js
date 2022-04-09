'use strict';
import { menuTemplate } from "./components/menu";
import { filterTemplate } from "./components/filters";
import { boardTemplate } from "./components/board";
import { taskEditTemplate, taskTemplate } from "./components/task";
import { loadMoreButton } from "./components/buttons";


const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
}

const main = document.querySelector('.main');
const header = main.querySelector('.main__control');

render(header, menuTemplate());
render(main, filterTemplate());
render(main, boardTemplate());

const taskLoList = main.querySelector('.board__tasks');
const board = main.querySelector('.board');

render(taskLoList, taskEditTemplate());

const TASK_COUNT = 3;
for (let i = 0; i < TASK_COUNT; i++) {
    render(taskLoList, taskTemplate());
}
render(board, loadMoreButton(), );
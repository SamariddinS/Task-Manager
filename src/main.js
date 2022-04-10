'use strict';
import { menuTemplate } from "./components/menu";
import { filterTemplate } from "./components/filters";
import { boardTemplate } from "./components/board";
import { taskTemplate } from "./components/task";
import { taskEditTemplate } from "./components/task-editor";
import { loadMoreButton } from "./components/buttons"
import { generateFilters } from "./mock/filter";
import { generateTasks } from "./mock/task"

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;


const render = (container, template, place = 'beforeend') => {
    container.insertAdjacentHTML(place, template);
}

const main = document.querySelector('.main');
const header = main.querySelector('.main__control');

const filter = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(header, menuTemplate());
render(main, filterTemplate(filter));
render(main, boardTemplate());

const board = main.querySelector('.board');
const taskLoList = main.querySelector('.board__tasks');

render(taskLoList, taskEditTemplate(tasks[0]));

let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTaskCount)
    .forEach((task) => render(taskLoList, taskTemplate(task)));

render(board, loadMoreButton(), );
const loadMoreBtn = board.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, () => {
    const prevTaskCount = showingTaskCount;
    showingTaskCount = showingTaskCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTaskCount, showingTaskCount)
        .forEach((task) => render(taskLoList, taskTemplate(task)));

    if (showingTaskCount >= tasks.length) {
        loadMoreBtn.remove();
    }
});
/* 
-create variable that gets data from local storage and default to 'empty task' list

-set local storage with key of task and value of task and value of the variable declared above
*/

/*
event listeners for:
plus button
garabage icon
checkbox
*/


// const task = localStorage.getItem('task') || 'Empty Tasks'

const plusIcon = document.querySelector('.plus-icon');
const garbageIcon = document.querySelector('.garbage-icon');
const todoList = document.querySelector('.todoapp-body__list');
const todoInput = document.querySelector('.todoapp-body__input');

const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function init() {
    render();
}

function render() {
    todoList.innerHTML = '';
    todoInput.value = '';
    taskList.map((task, index) => {
        todoList.innerHTML += `
        <li class="todoapp-body__items">
            <div>
                <input class="task" type="checkbox">
                <label for="task">${task}</label>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="garbage-icon garbage${index} w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </li>`

        deleteItem(index);
        // todoList.addEventListener('click', (e) => {
            //     const className = e.target.classList.value;
            //     // console.log(className.includes('garbage'));
            //     if(className.includes('garbage-icon')) {
                //         // console.log(taskList);
                //         taskList.splice(index, 1);
                //         localStorage.setItem('taskList', JSON.stringify(taskList));
                //         render();
                //     }
                // })
    })
    // console.log(todoList);
};

function addItem() {
    const currentValue = todoInput.value;

    if(currentValue !== '') {
        // must push first then set to local storage or you will skip first index
        taskList.push(currentValue); 
        localStorage.setItem('taskList', JSON.stringify(taskList)); 
        render();
    } 
    // console.log(taskList);
};

function deleteItem(i) {
    todoList.addEventListener('click', (e) => {
        const className = e.target.classList.value;
        // console.log(className.includes('garbage'));
        if(className.includes('garbage-icon')) {
            // console.log(taskList);
            taskList.splice(i, 1);
            localStorage.setItem('taskList', JSON.stringify(taskList));
            render();
        }
    })
};

window.addEventListener('load', init);
plusIcon.addEventListener('click', addItem);
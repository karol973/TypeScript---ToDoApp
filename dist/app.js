var tasks = [{
        name: "wyrzucic smieci",
        done: false,
    },
    {
        name: "isc na siłkę",
        done: false,
    }];
var tasksContainerElement = document.querySelector(".tasks");
var addBtnElement = document.querySelector('#addBtn');
var taskInput = document.querySelector('#name');
var render = function () {
    tasksContainerElement.innerHTML = " ";
    taskInput.innerText = ' ';
    tasks.forEach(function (task, index) {
        var taskElement = document.createElement("li");
        var id = "task-".concat(index);
        //     <!-- <li>
        //     <label for="task-1">Wyrzucic smieci</label>
        //     <label type="checkbox" id="task-1" name ="wyrzucić śmieci"></label>
        // </li> -->
        var labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        var checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
var addTask = function (taskInput) {
    tasks.push({ name: taskInput, done: false });
};
addBtnElement.addEventListener('click', function (event) {
    event.preventDefault();
    addTask(taskInput.value);
    render();
});
render();
//# sourceMappingURL=app.js.map
document.querySelector('#button').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <input type="checkbox" class="task-checkbox">
            <span id="taskname">
                ${document.querySelector('#new-task input').value}
            </span>
            <button class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Delete item</title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="80" y1="112" x2="432" y2="112" style="stroke:#f00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="176" x2="256" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="184" y1="176" x2="192" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="328" y1="176" x2="320" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var checkboxes = document.querySelectorAll(".task-checkbox");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].onchange = function () {
                var taskName = this.nextElementSibling;
                if (this.checked) {
                    taskName.style.textDecoration = "line-through";
                    taskName.style.color = "#888";
                } else {
                    taskName.style.textDecoration = "none";
                    taskName.style.color = "#000";
                }
            }
        }

        document.querySelector("#new-task input").value = "";
    }
};
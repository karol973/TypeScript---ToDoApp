 const tasks:{
    name:string,
    done:boolean,
 }[]=[{
name:"wyrzucic smieci",
done:false,
 },
{
name:"isc na siłkę",
done:false,
}];


const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const addBtnElement: HTMLButtonElement = document.querySelector('#addBtn');
const taskInput: HTMLInputElement = document.querySelector('#name');
 
const render = () => {
    tasksContainerElement.innerHTML=" ";
    taskInput.innerText = ' ';
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        const id:string=`task-${index}`;

    //     <!-- <li>
    //     <label for="task-1">Wyrzucic smieci</label>
    //     <label type="checkbox" id="task-1" name ="wyrzucić śmieci"></label>
    // </li> -->
      const labelElement:HTMLLabelElement=document.createElement("label");
      labelElement.innerText=task.name;
      labelElement.setAttribute("for",id)
        
      const checkboxElement:HTMLInputElement = document.createElement("input");
      checkboxElement.type="checkbox";
      checkboxElement.name =task.name;
      checkboxElement.id=id;
      checkboxElement.checked=task.done;
      checkboxElement.addEventListener("change",()=>{
      checkboxElement.checked=!task.done;
      })

      taskElement.appendChild(labelElement);
      taskElement.appendChild(checkboxElement);

      tasksContainerElement.appendChild(taskElement);

    });
};

const addTask = (taskInput: string) => {
    tasks.push({name: taskInput, done:false});
}

addBtnElement.addEventListener('click', (event:Event) =>{
    event.preventDefault();
    addTask(taskInput.value);
    render();
});
render();

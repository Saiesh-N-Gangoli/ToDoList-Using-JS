window.addEventListener('load', ()=>{
    const form = document.querySelector('#formo');
    const input = document.querySelector('#inputo');
    const list_el = document.querySelector('#task');
  
    form.addEventListener('submit', (e)=>{
      e.preventDefault(); //prevents refreshing the page
  
      const task = input.value.trim(); //trim the input value to remove leading/trailing spaces
      if(!task){
        alert("Empty Task Alert!!"); //if task is empty, show an alert message and return
        return;
      }
  
      const task_el = document.createElement("div");
      task_el.classList.add("task");
  
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
  
      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readonly","readonly");
  
      task_content_el.appendChild(task_input_el);
  
      const task_action_el = document.createElement("div");
      task_action_el.classList.add("actions");
  
      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerText = "EDIT"; //set the button text
  
      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerText = "DELETE"; //set the button text
  
      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);
  
      task_el.appendChild(task_content_el);
      task_el.appendChild(task_action_el);
  
      list_el.appendChild(task_el);
      input.value = "";
    })
  
    list_el.addEventListener('click', (e)=>{
      if(e.target.classList.contains('edit')){
        const input_el = e.target.parentElement.previousElementSibling.firstElementChild;
        input_el.removeAttribute('readonly');
        input_el.focus();
      }
      else if(e.target.classList.contains('delete')){
        const task_el = e.target.parentElement.parentElement;
        task_el.remove();
      }
    })
  
    list_el.addEventListener('keyup', (e)=>{
      if(e.target.classList.contains('text') && e.keyCode === 13){ //check for Enter key pressed
        e.target.setAttribute('readonly', 'readonly');
      }
    })
  })
  
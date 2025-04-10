document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const taskTitle = document.getElementById("task-title");
    const taskDesc = document.getElementById("task-desc");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const title = taskTitle.value.trim();
      const desc = taskDesc.value.trim();
  
      if (title !== "" && desc !== "") {
        addTask(title, desc);
        taskTitle.value = "";
        taskDesc.value = "";
      }
    });
  
    function addTask(title, desc) {
      const li = document.createElement("li");
      li.className = "list-group-item";
  
      const contentDiv = document.createElement("div");
      contentDiv.innerHTML = `<strong>${title}</strong><br><span>${desc}</span>`;
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "mt-2";
  
      const doneBtn = document.createElement("button");
      doneBtn.className = "btn btn-success btn-sm me-1";
      doneBtn.textContent = "Selesai";
      doneBtn.onclick = () => {
        contentDiv.classList.toggle("text-decoration-line-through");
      };
  
      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-warning btn-sm me-1";
      editBtn.textContent = "Edit";
      editBtn.onclick = () => {
        const currentTitle = contentDiv.querySelector("strong").textContent;
        const currentDesc = contentDiv.querySelector("span").textContent;
  
        const newTitle = prompt("Edit Judul:", currentTitle);
        const newDesc = prompt("Edit Isi:", currentDesc);
  
        if (newTitle && newDesc) {
          contentDiv.innerHTML = `<strong>${newTitle}</strong><br><span>${newDesc}</span>`;
        }
      };
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.textContent = "Hapus";
      deleteBtn.onclick = () => {
        taskList.removeChild(li);
      };
  
      buttonsDiv.appendChild(doneBtn);
      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(deleteBtn);
  
      li.appendChild(contentDiv);
      li.appendChild(buttonsDiv);
  
      taskList.appendChild(li);
    }
  });
  
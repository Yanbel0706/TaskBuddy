document.addEventListener('DOMContentLoaded', function() {
	const taskForm = document.getElementById('task-form');
	const taskList = document.getElementById('task-list');

	taskForm.addEventListener('submit', function(event) {
		event.preventDefault();
		createTask();
	});

	function createTask() {
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const due_date = document.getElementById('due_date').value;

		const formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('due_date', due_date);

		fetch('create_task.php', {
			method: 'POST',
			body: formData
		})
		.then(response => response.text())
		.then(data => {
			console.log(data);
			loadTasks();
		})
		.catch(error => console.error('Error:', error));
	}

	function loadTasks() {
		fetch('get_tasks.php')
		.then(response => response.json())
		.then(data => {
			taskList.innerHTML = '';
			data.forEach(task => {
				const li = document.createElement('li');
				li.innerHTML = `${task.title} - ${task.description} <button onclick="deleteTask(${task.id})">Delete</button>`;
				taskList.appendChild(li);
			});
		})
		.catch(error => console.error('Error:', error));
	}

	window.deleteTask = function(taskId) {
		const formData = new FormData();
		formData.append('task_id', taskId);

		fetch('delete_task.php', {
			method: 'POST',
			body: formData
		})
		.then(response => response.text())
		.then(data => {
			console.log(data);
			loadTasks();
		})
		.catch(error => console.error('Error:', error));
	}
	
	loadTasks();
});


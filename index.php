<?php include 'templates/header.html'; ?>

<div id="task-container">
    <h2>Task Manager</h2>
    <form id="task-form">
        <input type="text" id="title" placeholder="Task Title" required>
        <textarea id="description" placeholder="Task Description" required></textarea>
        <input type="date" id="due_date" required>
        <button type="submit">Add Task</button>
    </form>
    <ul id="task-list"></ul>
</div>

<?php include 'templates/footer.html'; ?>
<script src="js/script.js"></script>

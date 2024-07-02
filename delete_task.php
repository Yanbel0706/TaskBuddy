<?php
$conn = new mysqli("localhost", "username", "password", "database");

$task_id = $_POST['task_id'];

$sql = "DELETE FROM tasks WHERE id = $task_id";
if ($conn->query($sql) === TRUE) {
	    echo "Task deleted successfully";
} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

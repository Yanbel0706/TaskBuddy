<?php
$conn = new mysqli("localhost", "username", "password", "database");

$title = $_POST['title'];
$description = $_POST['description'];
$due_date = $_POST['due_date'];

$sql = "INSERT INTO tasks (title, description, due_date) VALUES ('$title', '$description', '$due_date')";
if ($conn->query($sql) === TRUE) {
	    echo "Task created successfully";
} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


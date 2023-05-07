<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sprawdzenie, czy tabela istnieje
$tableName = "users";
$tableExists = mysqli_query($conn, "SELECT 1 FROM $tableName");

if (!$tableExists) {
    // Tworzenie tabeli, jeśli nie istnieje
    $sql = "CREATE TABLE $tableName (
      id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      email VARCHAR(50),
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )";

    if ($conn->query($sql) === false) {
        die("Error creating table: " . $conn->error);
    }
}

// Pobranie danych z formularza
$data = json_decode(file_get_contents('php://input'), true);

$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

// Sprawdzenie, czy email już istnieje w bazie danych
$sql = "SELECT * FROM $tableName WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Email already exists']);
    exit();
}

// Zapisanie danych do bazy danych
$sql = "INSERT INTO $tableName (first_name, last_name, email, password)
        VALUES ('$firstName', '$lastName', '$email', '$password')";

if ($conn->query($sql) === true) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();

// Zapisanie danych do pliku
  $file = fopen('data.txt', 'a');
  fwrite($file, "$username, $email\n");
  fclose($file);

  echo 'Dane zostały przesłane i zapisane w pliku data.txt.';

?>
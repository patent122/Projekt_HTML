<?php
// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "store";

$conn = new mysqli($servername, $username, $dbpassword, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

// Pobranie danych z formularza
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

// Przykład przetwarzania danych
$fullName = $firstName . ' ' . $lastName;

// Przykład odpowiedzi
echo "Witaj, $fullName! Twoje dane zostały pomyślnie przesłane.";

// Sprawdzenie, czy tabela już istnieje
$tableExists = false;
$result = $conn->query("SHOW TABLES LIKE 'users'");

if ($result->num_rows > 0) {
    $tableExists = true;
}

// Jeśli tabela nie istnieje, utwórz ją
if (!$tableExists) {
    $createTableQuery = "CREATE TABLE users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL
    )";

    if ($conn->query($createTableQuery) === TRUE) {
        echo "Tabela 'users' została pomyślnie utworzona.";
    } else {
        echo "Błąd podczas tworzenia tabeli 'users': " . $conn->error;
    }
}

// Sprawdzenie, czy adres e-mail już istnieje w bazie danych
$checkEmailQuery = "SELECT * FROM users WHERE email = '$email'";
$emailResult = $conn->query($checkEmailQuery);

if ($emailResult->num_rows > 0) {
    die("Taki e-mail już istnieje.");
}

// Szyfrowanie hasła
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Przygotowanie i wykonanie zapytania do wstawienia danych do tabeli
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "Dane zostały pomyślnie zapisane do bazy danych.";
} else {
    echo "Wystąpił błąd podczas zapisywania danych: " . $stmt->error;
}

// Zamknięcie połączenia i zwolnienie zasobów
$stmt->close();
$conn->close();
?>
<?php

header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
// Pobranie danych z formularza
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];

$fullName = $firstName . ' ' . $lastName;
echo "Witaj, $fullName! Twoje dane zostały pomyślnie przesłane.";

// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "store";

$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

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
        last_name VARCHAR(50) NOT NULL
    )";

    if ($conn->query($createTableQuery) === TRUE) {
        echo "Tabela 'users' została pomyślnie utworzona.";
    } else {
        echo "Błąd podczas tworzenia tabeli 'users': " . $conn->error;
    }
}

// Przygotowanie i wykonanie zapytania do wstawienia danych do tabeli
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name) VALUES (?, ?)");
$stmt->bind_param("ss", $firstName, $lastName);

if ($stmt->execute()) {
    echo "Dane zostały pomyślnie zapisane do bazy danych.";
} else {
    echo "Wystąpił błąd podczas zapisywania danych: " . $stmt->error;
}

// Zamknięcie połączenia i zwolnienie zasobów
$stmt->close();
$conn->close();
?>
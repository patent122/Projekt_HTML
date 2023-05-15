<?php
// Połącz się z bazą danych
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'store';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

// Pobranie danych z formularza
$email = $_POST['email'];
$password = $_POST['password'];

// Zaszyfrowanie hasła
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Sprawdzenie danych w bazie danych
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['password'];

    // Porównanie zaszyfrowanego hasła z hasłem w bazie danych
    if (password_verify($password, $storedPassword)) {
        // Dane logowania poprawne - umożliw zalogowanie
        echo "Zalogowano pomyślnie!";
    } else {
        // Niepoprawne hasło
        echo "Nieprawidłowe dane logowania.";
    }
} else {
    // Brak użytkownika o podanym adresie email w bazie danych
    echo "Nieprawidłowe dane logowania.";
}

$conn->close();
?>

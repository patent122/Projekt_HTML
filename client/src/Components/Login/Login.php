<?php
// Pobierz dane z formularza
$email = $_POST['email'];
$password = $_POST['password'];

// Połącz z bazą danych
$dbHost = 'localhost';
$dbUser = 'root'; // Nazwa użytkownika bazy danych
$dbPass = ''; // Hasło użytkownika bazy danych
$dbName = 'store'; // Nazwa bazy danych

$connection = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

if (!$connection) {
    // Błąd połączenia z bazą danych
    echo json_encode(['error' => 'Wystąpił błąd podczas połączenia z bazą danych']);
    exit();
}

// Wykonaj zapytanie w celu pobrania użytkownika o podanym emailu
$query = "SELECT id, email, password FROM users WHERE email = '$email'";
$result = mysqli_query($connection, $query);

if (!$result) {
    // Błąd zapytania do bazy danych
    echo json_encode(['error' => 'Wystąpił błąd podczas zapytania do bazy danych']);
    exit();
}

if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);

    $storedId = $row['id'];
    $storedEmail = $row['email'];
    $storedPassword = $row['password'];

    // Porównaj zaszyfrowane hasło z hasłem wprowadzonym przez użytkownika
    if (password_verify($password, $storedPassword)) {
        // Dane logowania są zgodne, zwróć dane użytkownika
        echo json_encode(['id' => $storedId, 'email' => $storedEmail, 'password' => $storedPassword]);
        exit();
    }
}

// Nieprawidłowy email lub hasło
echo json_encode(['error' => 'Nieprawidłowy email lub hasło']);

// Zamknij połączenie z bazą danych
mysqli_close($connection);

?>
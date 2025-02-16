<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validación básica
    if (empty($name) || empty($email) || empty($message)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Configuración del correo
    $to = "maria.krainer@hospitalitaliano.org.ar";
    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n\n";
    $body .= "Mensaje:\n$message";

    // Encabezados
    $headers = "From: $email";

    // Envío del correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
    }
}
?>

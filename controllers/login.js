document.getElementById("login__form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!isEmailValid(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (password.length < 5) {
        alert("La contraseña debe tener al menos 5 caracteres.");
        return;
    }
    document.getElementById("login__form").reset();
    window.location.href = "../screens/producto.html";

});

function isEmailValid(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

emailInput.addEventListener("input", function() {
    if (isEmailValid(emailInput.value)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
    } else {
        emailInput.classList.remove("success");
    }
});

passwordInput.addEventListener("input", function() {
    if (passwordInput.value.length >= 5) {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
    } else {
        passwordInput.classList.remove("success");
    }
});

document.getElementById("login__form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!isEmailValid(emailInput.value)) {
        emailInput.classList.add("error");
        passwordInput.classList.remove("success");
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (passwordInput.value.length < 5) {
        passwordInput.classList.add("error");
        emailInput.classList.remove("success");
        alert("La contraseña debe tener al menos 5 caracteres.");
        return;
    }

    // Limpio el formulario:
    document.getElementById("login__form").reset();

    // Redirecciono al html de Producto:
    window.location.href="product.html";

    // Quita los estilos de error:
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");

    // Agrega el estilo de éxito
    emailInput.classList.add("success");
    passwordInput.classList.add("success");
});

function isEmailValid(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

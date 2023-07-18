export const sessionContext = {
  isLoggedIn: false,
  user: "",
};

// Función para actualizar el estado del contexto
export function updateSessionContext(isLoggedIn, user) {
  sessionContext.isLoggedIn = isLoggedIn;
  sessionContext.user = user;
}

// Función para obtener el estado del contexto
export function getSessionContext() {
  return sessionContext;
}
export function logout() {
  document.getElementById("logoutBtn").addEventListener("click", function () {
    updateSessionContext(false, "");
  });
}

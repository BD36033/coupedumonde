// service de gestion de l'authentification des utilisateurs dois verifier si l'utilisateur est connnecté

async function loginUser(username: string, password: string) {
    // Logique pour connecter un utilisateur
}

async function logoutUser(userId: string) {
    // Logique pour deconnecter un utilisateur
}

async function isConnected(userId: string) {
    // Logique pour verifier si l'utilisateur est connecté retourne true ou false
}

export { loginUser, logoutUser, isConnected };

/* Cette fonction doit vérifier que l'utilisateur est bien connecté avant de faire son pari.

// Pour la partie authentification de l'utilisateur :

On va appeler la fonction (IsConnected) du service user-auth-service.
S'il est connecté, celui-ci peut faire son pari, sinon cela retourne une erreur.

// Pour la partie solde du portefeuille :

On va appeler la fonction (checkSolde) du service wallet-service.
S'il peut effectuer son pari, on vérifie que le solde de son portefeuille est suffisant.

// Pour la partie côte :

On va appeler la fonction (getOdds) du service odds-service.
On récupère la côte du match en question pour vérifier si elle est bonne.

Ex : S'il veut parier 10 euros sur un match, mais que son portefeuille contient que 6 euros -> erreur.
 */

async function makeBet(){}
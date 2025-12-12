
/* Cette fonction doit vérifier que l'utilisateur à un fond nécessaire afin de réaliser un pari.

Tout d'abord, on doit vérifier que l'utilisateur est bien connecté (checker son token).

Si le fond est nécessaire -> return true : false si ce n'est pas le cas et envoie d'une erreur correspondante aux problèmes.

Ex: L'utilisateur à 10 euros et veut parier 10 euros, il a le solde nécessaire donc return true.
*/

async function getSolde(idUtilisateur: string){}

/* Cette fonction permet de mettre à jour le portefeuille de l'utilisateur.

Tout d'abord, on doit vérifier que l'utilisateur est bien connecté (checker son token).

S'il est connecté, on met à jour son solde.

Ex: Il ajoute 10 euros à son solde, il a 5 euros de base, il aura donc 15 euros après.
*/

async function updateSolde(argent: number){}
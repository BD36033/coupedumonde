// Service permettant de gerer les cotes des evenements sportifs 

async function setOdds(matchId: string, odds: number) {
    // Logique pour definir les cotes en fonction d'un match
}

async function getOdds(matchId: string) {
    // Logique pour recuperer les cotes d'un match retourne une erreur si le match n'existe pas
}

async function updateOdds(oddsId: string, newOdds: number) {
    // Logique pour mettre a jour les cotes d'un match retourne une erreur si le match n'existe pas
}

export { setOdds, getOdds, updateOdds };
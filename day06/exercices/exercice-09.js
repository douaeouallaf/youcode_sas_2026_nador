/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let candidats = [
    { nom: "Ahmed", score: 15 },
    { nom: "Sara", score: 18 },
    { nom: "Youssef", score: 8 },
    { nom: "Imane", score: 10 }
];

function candidatsAdmis() {
    let resultat = candidats.filter(function(candidat) {
        return candidat.score >= 10;
    });

    return resultat;
}

console.log(candidatsAdmis())
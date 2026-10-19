// Snutt 8: Två beställningar
// Gissa utskriften INNAN du kör. Ändra inte filen.

const vanta = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log("beställer");
vanta(200).then(() => console.log("kaffet klart"));
vanta(100).then(() => console.log("bullen klar"));
console.log("sätter mig");

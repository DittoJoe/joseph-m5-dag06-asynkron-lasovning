// Snutt 9: Promise.all
// Gissa utskriften INNAN du kör. Ändra inte filen.

const vanta = (ms, v) => new Promise((resolve) => setTimeout(() => resolve(v), ms));

Promise.all([vanta(200, "kaffe"), vanta(100, "bulle")])
  .then((resultat) => console.log(resultat));
console.log("väntar på båda");

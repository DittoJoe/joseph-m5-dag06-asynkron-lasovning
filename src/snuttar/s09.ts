// Snutt 9: Promise.all
// Gissa utskriften INNAN du kör. Ändra inte filen.

const vanta = (ms: number, v: string) => new Promise<string>((resolve) => setTimeout(() => resolve(v), ms));

Promise.all([vanta(200, "kaffe"), vanta(100, "bulle")])
  .then((resultat) => console.log(resultat));
console.log("väntar på båda");

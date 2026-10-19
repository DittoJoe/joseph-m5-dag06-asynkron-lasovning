// Snutt 11: Utmaning: then som väntar
// Gissa utskriften INNAN du kör. Ändra inte filen.

Promise.resolve("a")
  .then((v) => new Promise((resolve) => setTimeout(() => resolve(v + "b"), 50)))
  .then((v) => console.log(v));
console.log("c");

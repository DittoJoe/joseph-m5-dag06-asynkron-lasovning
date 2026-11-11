// Snutt 7: Fel i en kedja
// Gissa utskriften INNAN du kör. Ändra inte filen.

new Promise((_, reject) => reject(new Error("slut på mjölk")))
  .then(() => console.log("lyckades"))
  .catch((fel) => console.log("fel:", fel.message))
  .finally(() => console.log("städar"));

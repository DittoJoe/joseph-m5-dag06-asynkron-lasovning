// Snutt 5: Promise mot timeout
// Gissa utskriften INNAN du kör. Ändra inte filen.

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("sync");

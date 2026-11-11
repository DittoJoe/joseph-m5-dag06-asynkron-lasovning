// Snutt 4: Promise och then
// Gissa utskriften INNAN du kör. Ändra inte filen.

const p = new Promise((resolve) => {
  console.log("inuti promise");
  resolve("klart");
});
p.then((v) => console.log("then:", v));
console.log("efter");

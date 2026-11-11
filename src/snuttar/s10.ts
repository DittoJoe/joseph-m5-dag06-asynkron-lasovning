// Snutt 10: Alla delar blandade
// Gissa utskriften INNAN du kör. Ändra inte filen.

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
setTimeout(() => {
  console.log("4");
  Promise.resolve().then(() => console.log("5"));
}, 0);
console.log("6");

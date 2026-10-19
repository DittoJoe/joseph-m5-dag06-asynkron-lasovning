// Snutt 6: Kedja av then
// Gissa utskriften INNAN du kör. Ändra inte filen.

Promise.resolve(2)
  .then((v) => v * 3)
  .then((v) => {
    console.log(v);
    return v + 1;
  })
  .then((v) => console.log(v));
console.log("först?");

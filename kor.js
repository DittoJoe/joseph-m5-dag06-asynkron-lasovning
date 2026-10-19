// Kör snuttarna i snuttar/ och visar utskriften på sidan. Du behöver inte ändra den här filen.
const ANTAL = 11;
const behallare = document.querySelector("#snuttar");

function visa(varde) {
  if (typeof varde === "string") return varde;
  try { return JSON.stringify(varde); } catch (fel) { return String(varde); }
}

for (let n = 1; n <= ANTAL; n++) {
  const filnamn = `snuttar/s${String(n).padStart(2, "0")}.js`;
  const sektion = document.createElement("section");
  const rubrik = document.createElement("h2");
  rubrik.textContent = `Snutt ${n}`;
  const kod = document.createElement("pre");
  const ut = document.createElement("pre");
  ut.className = "ut";
  ut.textContent = "(inte körd än)";
  const knapp = document.createElement("button");
  knapp.type = "button";
  knapp.textContent = "Kör";
  fetch(filnamn).then((svar) => svar.text()).then((text) => { kod.textContent = text; });

  knapp.addEventListener("click", async () => {
    knapp.disabled = true;
    ut.textContent = "";
    const original = console.log;
    console.log = (...delar) => {
      ut.textContent += (ut.textContent ? "\n" : "") + delar.map(visa).join(" ");
      original(...delar);
    };
    await import(`./${filnamn}?körning=${Date.now()}`);
    setTimeout(() => { console.log = original; knapp.disabled = false; }, 1000);
  });

  sektion.append(rubrik, kod, knapp, ut);
  behallare.append(sektion);
}

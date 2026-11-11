// Kör snuttarna i src/snuttar/ och visar utskriften på sidan. Du behöver inte ändra den här filen.
//
// import.meta.glob är Vites sätt att hämta alla filer som matchar ett mönster.
// "?raw" ger filens text (för att visa koden), utan "?raw" kan vi köra den.
const koder = import.meta.glob<string>("./snuttar/*.ts", { query: "?raw", import: "default" });
const ANTAL = Object.keys(koder).length;
const behallare = document.querySelector<HTMLElement>("#snuttar");

function visa(varde: unknown): string {
  if (typeof varde === "string") return varde;
  try {
    return JSON.stringify(varde);
  } catch {
    return String(varde);
  }
}

if (behallare) {
  for (let n = 1; n <= ANTAL; n++) {
    const namn = `s${String(n).padStart(2, "0")}`;
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
    void koder[`./snuttar/${namn}.ts`]?.().then((text) => {
      kod.textContent = text;
    });

    knapp.addEventListener("click", async () => {
      knapp.disabled = true;
      ut.textContent = "";
      const original = console.log;
      console.log = (...delar: unknown[]) => {
        ut.textContent += (ut.textContent ? "\n" : "") + delar.map(visa).join(" ");
        original(...delar);
      };
      // ?körning=... gör att filen körs om vid varje klick (annars cachas modulen).
      await import(/* @vite-ignore */ `/src/snuttar/${namn}.ts?körning=${Date.now()}`);
      setTimeout(() => {
        console.log = original;
        knapp.disabled = false;
      }, 1000);
    });

    sektion.append(rubrik, kod, knapp, ut);
    behallare.append(sektion);
  }
}

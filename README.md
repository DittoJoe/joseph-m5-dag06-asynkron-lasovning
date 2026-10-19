# Dag 6 · Asynkron kod: läs och förutsäg

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du lär dig förstå **asynkron kod**: kod som körs senare än den står skriven. Idag skriver du nästan ingen kod. Du läser färdiga snuttar med `setTimeout` och promises, **gissar** utskriftsordningen, kör och jämför. Imorgon skriver du själv.

## Bakgrund

Det här är modulens svåraste begrepp, och därför har det en hel dag. Webbläsaren kan inte stå och vänta på att ett svar från internet kommer, för då fryser sidan. Istället säger den "kör det här senare, när svaret kommit". Resultatet är att kod inte alltid körs i den ordning den står skriven. Förstår du det här kan du skriva (och granska) all kod som hämtar data. Förstår du det inte blir allt som kommer härnäst gissningar.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Fortsätt i `mitt-projekt`** med dagens projektsteg (längre ned).
6. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

Filer som använder `import` fungerar bara när sidan öppnas med *Live Server*. Dubbelklickar du på en HTML-fil hamnar du på `file://` och får ett CORS-fel i Console.

## Uppgiften steg för steg

### Steg 1. Förbered: öppna sidan och titta på en snutt

Starta Live Server på `index.html`. Du ser elva snuttar, var och en med en *Kör*-knapp. Läs snutt 1 och 2 utan att trycka. Öppna `forutsagelser.md`. Du skriver din gissning i tabellen innan du kör.

### Steg 2. Snutt 1–4

Gissa utskriften för snutt 1 till 4 och skriv din gissning i `forutsagelser.md`. Kör sedan varje snutt, skriv in den faktiska utskriften och markera om du hade rätt. För varje snutt du gissat fel på: skriv en regel med egna ord.

### Steg 3. Snutt 5–8

Samma sak för snutt 5 till 8. Snutt 5 och 8 är de som oftast överraskar. Rita gärna på papper.

### Steg 4. Snutt 9–11

Samma sak för snutt 9 till 11. Snutt 11 är en utmaning: ett `then` som returnerar en ny promise.

### Steg 5. Titta på facit och jämför

Öppna inte `facit`-mappen (den är lärarens). Istället: gå igenom dina regler med en kamrat eller i Console. Kör om de snuttar du gissade fel på och förklara högt varför ordningen blir som den blir.

### Steg 6. Rita tidslinjen

Öppna `tidslinje.md`. Fyll i tabellerna för snutt 5 och snutt 10: vad som ligger på anropsstacken, i microtask-kön och i task-kön efter varje steg. Det här är samma modell som läraren ritade på tavlan.

### Steg 7. Tre meningar

Skriv de tre meningarna sist i `forutsagelser.md` med egna ord: vad JavaScript gör med `setTimeout`, de tre tillstånden hos en promise, och när `then` körs.

### Steg 8. Fördjupning (frivillig): din egen vänta-funktion

I `egen.js`: skriv `vanta(ms)` som returnerar en promise som blir klar efter `ms` millisekunder. Det är den enda koden du skriver idag. Testa den i Console.

## AI-spåret (nivå 2: Specificera och jämför)

**Förutsäg exekveringsordningen** (cirka 25 minuter, efter att du gjort din egen lösning)

Du beskriver exakt vad koden ska göra och skriver testerna. AI föreslår kod, du kör testerna, jämför och förstår. Asynkron kod är det som AI oftast gör fel utan att säga det. Förstår du ordningen kan du upptäcka det.

Regler: egen lösning först, du ska kunna förklara varje rad, och du loggar i `docs/ai-logg.md` i `mitt-projekt` under rubriken *Modul 5*. Reglerna står i `AI-REGLER-MODUL5.md`.

1. Be AI skapa tre korta kodsnuttar med setTimeout och promises som är svåra att förutsäga. Visa inte svaret.
2. Skriv ner din förutsägelse av utskriftsordningen för varje.
3. Kör dem i Console och jämför.
4. Be AI förklara de du missade, steg för steg.
5. Rita tidslinjen för en av dem på papper och fota eller beskriv den i loggen.

Prompt att utgå från:

```
Skapa tre korta JavaScript-exempel med setTimeout
och promises där utskriftsordningen är lurig.
Visa bara koden, inte svaret. Svårighet: nybörjare.
Efteråt: förklara ordningen steg för steg
med händelseloopen som modell.
```

**Kontrollera med:**

- Kör exemplen i Console.
- Jämför med din tidslinje.
- Kan du förklara varför en promise körs före setTimeout 0?

**I ditt projekt:** Skriv docs/async-anteckningar.md: tre ställen i ditt case där programmet måste vänta, och vad användaren ska se medan det väntar.

## Kontrollista: så vet du att du är klar

- [ ] Du har fyllt i gissning *före* faktisk utskrift för alla elva snuttar.
- [ ] Du har skrivit en regel för varje snutt du gissade fel på.
- [ ] Du kan förklara varför en promise-callback körs före en `setTimeout(..., 0)`.
- [ ] Du har fyllt i tidslinjen för snutt 5 och 10.
- [ ] Du har skrivit de tre meningarna med egna ord.
- [ ] Du har gjort minst tre commits.
- [ ] Du har gjort AI-uppgiften och skrivit en post i `docs/ai-logg.md` i `mitt-projekt`.

## Tips om du fastnar

- Fastnar du på en snutt: skriv ner vilka delar som körs direkt (synkront) och vilka som körs senare. Börja med att skriva alla `console.log` som står direkt i filen.
- Tänk: *först* all vanlig kod, *sedan* alla promise-callbacks, *sedan* en timer i taget.
- `setTimeout(f, 0)` betyder inte "nu", det betyder "så snart som möjligt, men efter nuvarande kod".
- Kör inte om snuttar bara för att se svaret. Gissa först, annars lär du dig ingenting.
- Det är helt normalt att gissa fel på hälften. Det är poängen.

## Ditt projekt: Planera väntan i ditt projekt (ingen kod idag)

Efter övningen jobbar du vidare i `mitt-projekt`, samma repo som i modul 4. Övningen här är träningsbanan, projektet är det som växer. Dagens steg står också i `PROJEKTSTEG-MODUL5.md` (som du kopierar till ditt projekt dag 1), under **Dag 6**.

1. Skapa `docs/async-anteckningar.md`.
2. Lista tre ställen i ditt case där programmet måste vänta (till exempel hämta data, skicka ett formulär, spara något).
3. För varje ställe: skriv vad användaren ska se medan det väntar (laddar), om det går fel (fel) och om det inte finns något (tomt). Använd dina designade tillstånd från modul 3, dag 8.
4. Hitta ett öppet API utan nyckel som passar ditt case, eller skriv att du istället använder en egen JSON-fil. Lägg in två kandidater med länk till dokumentationen och en exempel-URL. Öppna URL:en i webbläsaren och kontrollera att den ger JSON.
5. Kontrollera villkoren för API:et (får det användas, kräver det källhänvisning?) och skriv en rad om det.
6. Commit och push.

**Klart när:** `docs/async-anteckningar.md` har tre ställen, tre tillstånd per ställe och ett valt API (eller en JSON-fil).

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Länk till ditt `mitt-projekt`.
3. Reflektion: Vilken snutt överraskade dig mest, och vilken regel skrev du för den? Förklara med egna ord varför JavaScript inte väntar på `setTimeout`.

## Vill du mer? (frivilligt)

- Skriv en egen snutt där utskriftsordningen är svår att gissa, och låt en kamrat gissa.
- Läs om `async`-funktioner på MDN (vi tar dem imorgon) och försök förutsäga vad `console.log(minFunktion())` skriver för en `async function`.
- Läs om `queueMicrotask` och försök skriva en snutt med den.

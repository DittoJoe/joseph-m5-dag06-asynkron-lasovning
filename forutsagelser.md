# Förutsägelser: asynkron kod

Regler:

1. Titta på snutten i `snuttar/sNN.js` (eller på sidan `index.html`). **Kör den inte än.**
2. Skriv din gissning i tabellen: utskrifterna i den ordning du tror att de kommer, separerade med ` | `.
3. Kör snutten (knappen *Kör*). Skriv vad som faktiskt skrevs ut.
4. Hade du rätt? Skriv en regel med egna ord för varje snutt du gissade fel på.

| 1 | RÄTT |
1: Beställer kaffe
2: Läser tidningen
3: Kaffet är klart

1: Beställer kaffe
2: Läser tidningen
3: Kaffet är klart

| 2 | FEL - timeout med 0 kommer sist |
B
A
C

A
C
B

| 3 | FEL - glömde skriva ut sista linjen |
noll
kort
lång

start
noll
kort
lång

| 4 | FEL - glömde skriva ut .then |
inuti promise
klart
efter

inuti promise
klart
efter
then: klart

| 5 | RÄTT |
sync
promise
timeout

sync
promise
timeout

| 6 | RÄTT |
först?
6
7

först?
6
7

| 7 | RÄTT |
fel: slut på mjölk
städar

fel: slut på mjölk
städar

| 8 | RÄTT |
beställer
sätter mig
bullen klar
kaffet klar

beställer
sätter mig
bullen klar
kaffet klar

| 9 | FEL - resultat blir en array |
väntar på bäda
bulle
kaffe

väntar på båda
["kaffe","bulle"]

| 10 | FEL - Timeout i en Promise kommer efter Timeout utanför |
1
6
4
5
3
2

1
6
3
2
4
5

| 11 | FEL - löften returnerar a och b tillsammans |
c
a
b

c
ab

## Tre meningar med egna ord

1. JavaScript väntar inte på `setTimeout`, utan ...
2. En promise har tre tillstånd: ...
3. `then` körs alltid ...

//Eltároljuk változóba az input mezőket(cim,szerző,cikkszám)
const title = document.getElementById("title");
const author = document.getElementById("author");
const number = document.getElementById("number");
const table = document.querySelector("table");
const form = document.querySelector("form");

//1.lépés : Készitsünk egy "submit" eseményt a formra, melynek hatására ,beletudjuk rakni a könyv adatiat a táblázatunkba
form.addEventListener("submit", function (e) {
  //Megakadályozzuk hogy az adatok elküldése után frissüljön az oldal
  e.preventDefault();
  //Lefuttatjuk függvényünket amely hozzáadja a táblázathoz a beirt adatokat
  addBook();
});

//2.lépés : Csináljuk meg az addBook függvényünket
function addBook() {
  //Létrekell hoznunk a táblázat következő sorát,benne a három oszloppal
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  //Az elöbb létrehozott oszlopokba eltárolom az inputmezökböl kinyert értékeket
  td1.innerText = title.value;
  td2.innerText = author.value;
  td3.innerText = number.value;

  //Az oszlopokat hozzáfűzzük az általunk létrehozzot sorhoz(tr)
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  //Az általam létrehozzot sort(tr) hozzáfűzzük táblázatunkhoz
  table.appendChild(tr);

  //Üresre állitjuk az inputmezök értékét
  title.value = "";
  author.value = "";
  number.value = "";
}

//3.lépés : Bizonyos napszakban változtassuk meg az oldal témáját sötétre

//Eltárolom az aktuális órát
const hour = new Date().getHours();

if (hour > 12) {
  document.body.style.backgroundColor = "#2e2e2d";
  table.classList.add("table-dark");
  form.classList.add("bg-dark");
  form.classList.add("text-light");
}

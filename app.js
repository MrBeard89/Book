//Eltároljuk változóba az input mezőket(cim,szerző,cikkszám,ár,áfa,legördülömenü)
const title = document.getElementById("title");
const author = document.getElementById("author");
const number = document.getElementById("number");
const cost = document.getElementById("cost");
const tip = document.getElementById("tip");
const dropdownmenu = document.querySelector(".dropdownmenu");
const table = document.querySelector("table");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  //Megakadályozzuk hogy az adatok elküldése után frissüljön az oldal
  e.preventDefault();
  //Lefuttatjuk függvényünket amely hozzáadja a táblázathoz a beirt adatokat
  addBook();
});

function addBook() {
  //Létrekell hoznunk a táblázat következő sorát,benne a három oszloppal
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");

  let brutto = cost.value * tip.value;
  let akcio = "";
  if (tip.value <= 27) {
    akcio = `Igen`;
  } else if (tip.value >= 27) {
    akcio = `Nem`;
  }
  //Az elöbb létrehozott oszlopokba eltárolom az inputmezökböl kinyert értékeket
  td1.innerText = title.value;
  td2.innerText = author.value;
  td3.innerText = number.value;
  td4.innerText = dropdownmenu.options[dropdownmenu.selectedIndex].text;
  td5.innerText = brutto;
  td6.innerText = akcio;

  //Az oszlopokat hozzáfűzzük az általunk létrehozzot sorhoz(tr)
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  //Az általam létrehozzot sort(tr) hozzáfűzzük táblázatunkhoz
  table.appendChild(tr);

  //Üresre állitjuk az inputmezök értékét
  title.value = "";
  author.value = "";
  number.value = "";
  cost.value = "";
  tip.value = "";
  dropdownmenu = document.getElementById("select").textContent;
}

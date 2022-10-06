let newPageTitle = document.querySelector("#website #namn");
newPageTitle.innerText = "Ankedimn kafeteria!";
console.log(newPageTitle);

let newSlogan = document.querySelector("#website #slogan");
newSlogan.innerText = "Stockholms no.1 coding café!";
console.log(newSlogan);

document.body.style.backgroundColor = "pink";

let allLi = document.querySelectorAll("ul li .pris ");
allLi.forEach((x) => {
  x.innerText = 19 + "kr";
});

let frukostMacka = document.querySelector("li:nth-child(3) .pris");
frukostMacka.innerText = "15";

let fruktList = document.querySelector("li:nth-child(4)");
fruktList.append("frukt - ");

let fruktPrice = document.createElement("span");
fruktPrice.innerText = 9;
fruktList.appendChild(fruktPrice);

let h3 = document.createElement("h3");
h3.innerText = " Öppettider: Alla dagar kl 18-21";

let div = document.querySelector("#website");
div.append(h3);

let textP = document.createElement("p");
textP.innerText = "till ankedemins cafe är all välkomna";
h3.append(textP);

document.querySelectorAll("p").forEach((x) => (x.style.color = "#800000"));

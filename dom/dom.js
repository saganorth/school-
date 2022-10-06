
let paragraph = document.createElement("p");

paragraph.innerText = "Hej från Javascript!";

document.body.append(paragraph);

let h1 = document.querySelector("#rubrik");
// let h1 = document.getElementById("rubrik");

h1.innerText = "Rubrik från Javascript";

function changeBackground() {
  document.body.style.background = "lightblue";
}

let changeBgBtn = document.querySelector("#changeBG");

changeBgBtn.addEventListener("click", changeBackground);

//uppgift 1.4

let changeParaBtn = document.createElement("button");
changeParaBtn.innerText = "Change text color";
changeParaBtn.addEventListener("click", () => {
  let allParagraphs = document.querySelectorAll("p");
  console.log(allParagraphs);
  allParagraphs.style.color = "red";
});

document.body.append(changeParaBtn);

let myClohtes = [
    {
      name: "Fresh black jacket by Nike",
      type: "jacket",
      color: "black",
      brand: "Nike"
    },
    {
      name: "Blue jeans by Levis",
      type: "jeans",
      color: "blue",
      brand: "Levis"
    },
    {
      name: "Sliver top by Zara",
      type: "top",
      color: "sliver",
      brand: "Zara"
    },
    {
      name: "Pink plattform shoes by Buffalo",
      type: "shoe",
      color: "pink",
      brand: "Buffalo"
    },
    {
      name: "Red flanel jacket by Levis",
      type: "jacket",
      color: "red",
      brand: "Levis"
    }
  ];
  
  let showMyClothes = document.querySelector("#showAll");
  let resultsUl = document.querySelector("#clothes");
  let showSome = document.querySelector("#select");
  
  showMyClothes.addEventListener("click", () => {
    resultsUl.innerHTML = "";
    let filteredClohtes = myClohtes.filter((clohtes) => {
      return "all";
    });
  
    filteredClohtes.forEach((clohtes) => {
      let li = document.createElement("li");
      li.textContent = `Namn: ${clohtes.name} Type:${clohtes.type} Color: ${clohtes.color} Brand: ${clohtes.brand}`;
      resultsUl.append(li);
    });
  });
  
 showSome.addEventListener("click", () => {
    resultsUl.innerHTML = "";
    let typeOfClothes = document.querySelector("#product").value;
    
    let filteredProducts = myClohtes.filter((clohtes) => {
      return (
        
        product === "All" || +product === clohtes.type
      ); 
     });
      filteredClohtes.forEach((clohtes) => {
        let li = document.createElement("li");
        li.textContent = `Namn: ${clohtes.name} Type:${clohtes.type} Color: ${clohtes.color} Brand: ${clohtes.brand}`;
        resultsUl.append(li);
    
    });
});

   


      
      
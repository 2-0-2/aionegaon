const cakeImages = [
    "./assets/good/케이크1.png",
    "./assets/good/케이크2.png",
    "./assets/pool/TJrdmsrj1.png",
    "./assets//TJrdmsrj2.png",
  ];
  
  function createCake() {
    const cake = document.createElement("div");
    cake.classList.add("cake");
    const randomIndex = Math.floor(Math.random() * cakeImages.length);
    cake.style.backgroundImage = `url(${cakeImages[randomIndex]})`;
    cake.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(cake);
  }
  
  setInterval(createCake, 1000);
if (confirm("Play 'Where's Waldo'? (click no to replace all)")) {
  toggleLonely();
} else {
  toggleScroll();
}

function toggleScroll() {
  document.addEventListener("scroll", () => {
    const imgArray = document.querySelectorAll("img");
    console.log("imgArray: ", imgArray);

    const waldoImg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1jhfnUtDCrqRj5CT7PJYVnxdG7b4PCp-gg&usqp=CAU";
    for (let i = 0; i < imgArray.length; i++) {
      imgArray[i].setAttribute("src", waldoImg);
    }
  });
}

function toggleLonely() {
  let i = 0;
  const waldoImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1jhfnUtDCrqRj5CT7PJYVnxdG7b4PCp-gg&usqp=CAU";

  document.addEventListener("scroll", () => {
    i++;
    const imgArray = document.querySelectorAll("img");
    if (i === 125) {
      alert(`He's hidden now. Go find him!`);
      const randIndex = Math.floor(Math.random() * imgArray.length);
      imgArray[randIndex].setAttribute("src", waldoImg);

      imgArray[randIndex].addEventListener("click", (e) => {
        e.preventDefault();
        const change = document.querySelectorAll("div");
        for (let i = 0; i < change.length; i++) {
          change[i].classList.add("winner");
          change[i].innerHTML = "YOU WON!";
        }
      });
    }
  });
}

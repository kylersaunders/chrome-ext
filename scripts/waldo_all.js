document.addEventListener("scroll", () => {
  const imgArray = document.querySelectorAll("img");
  console.log("imgArray: ", imgArray);

  const waldoImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1jhfnUtDCrqRj5CT7PJYVnxdG7b4PCp-gg&usqp=CAU";
  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].setAttribute("src", waldoImg);
  }
});

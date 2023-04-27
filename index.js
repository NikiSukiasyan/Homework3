let box = document.createElement("div");
document.body.appendChild(box);

box.style.marginTop = "70px";
box.style.marginLeft = "550px";
box.style.width = "600px";
box.style.height = "665px";
box.style.backgroundColor = "#b2acacf2";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.flexDirection = "column";

let title = document.createElement("h1");
title.innerText = "Blog Title";
box.appendChild(title);

let image = document.createElement("img");
image.src = "download.jpeg";
box.appendChild(image);

image.style.paddingTop = "15px";

let text = document.createElement("p");
text.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
box.appendChild(text);

text.style.paddingTop = "35px";
text.style.maxWidth = "300px";
text.style.fontSize = "17px";

let btn = document.createElement("button");
box.appendChild(btn);
btn.innerText = "Read More";

btn.style.width = "132px";
btn.style.height = "35px";
btn.style.marginTop = "55px";

let restOfText =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let isClicked = false;

btn.addEventListener("click", function () {
  if (!isClicked) {
    text.innerText += restOfText;
    isClicked = true;
  } else {
    text.innerText = text.innerText.slice(0, -restOfText.length);
    isClicked = false;
  }
});

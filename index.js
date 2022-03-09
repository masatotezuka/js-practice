const setInnerText = (id) => {
  const element = document.getElementById(id);
  console.log(element.innerText);
  console.log(id);
};

const setInnerHtml = (id) => {
  const element = document.getElementById(id);
  const literal = "書き換えられたよ。";
  console.log(element.innerText);
  element.innerHTML = `<p id='child'>HTMLが${literal}</p>`;
};

const replaceImageSrc = (id) => {
  const element = document.getElementById(id);
  element.setAttribute("src", "./小胸筋.JPG");
};

let counter = 0;

const appendChildNode = (id) => {
  const element = document.getElementById(id);
  element.insertAdjacentHTML("beforeend", `<div>${counter}つ目の要素</div>`);
  counter++;
};

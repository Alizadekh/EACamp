let idmanNovu = document.querySelector("#nov");
let mekan = document.querySelector("#mekan");
let vaxt = document.querySelector("#vaxt");
let boxes = document.querySelector("#boxes");
let button = document.getElementById("btn");

let box = (boxes.innerHTML = `<p>${idmanNovu.value}</p>`);
button.addEventListener("click", function () {
  boxes.innerHTML = `<div class="box"><p>${idmanNovu.value}</p> <p>${mekan.value}</p> <p>${vaxt.value}</p></div>`;
});

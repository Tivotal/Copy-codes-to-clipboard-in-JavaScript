/* Created by Tivotal */

let htmlInput = document.querySelector(".html");
let htmlBtn = document.querySelector(".copy-html");
let cssInput = document.querySelector(".css");
let cssBtn = document.querySelector(".copy-css");
let jsInput = document.querySelector(".js");
let jsBtn = document.querySelector(".copy-js");

htmlBtn.addEventListener("click", () => {
  //copying html code to clipboard
  navigator.clipboard.writeText(htmlInput.value);
  //changing button text
  htmlBtn.innerText = "Code Copied";

  setTimeout(() => {
    htmlBtn.innerText = "Copy Code";
  }, 500);
});

cssBtn.addEventListener("click", () => {
  //copying html code to clipboard
  navigator.clipboard.writeText(cssInput.value);
  //changing button text
  cssBtn.innerText = "Code Copied";

  setTimeout(() => {
    cssBtn.innerText = "Copy Code";
  }, 500);
});

jsBtn.addEventListener("click", () => {
  //copying html code to clipboard
  navigator.clipboard.writeText(jsInput.value);
  //changing button text
  jsBtn.innerText = "Code Copied";

  setTimeout(() => {
    jsBtn.innerText = "Copy Code";
  }, 500);
});

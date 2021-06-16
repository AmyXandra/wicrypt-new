// Select the button
const modeBtn = document.getElementById('mode-toggle');
// const modeBtn = document.querySelector('#mode-toggle');
// console.log("modeBtn", modeBtn)


const currentTheme = localStorage.getItem("theme");
// console.log("currentTheme",currentTheme)
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  // console.log('button clicked');    
  let theme = "dark";
  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
// console.log("theme",theme)
  
});



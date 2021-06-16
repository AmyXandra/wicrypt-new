// Select the button
const modeBtn = document.getElementById('mode-toggle');
// const modeBtn = document.querySelector('#mode-toggle');
// console.log("modeBtn", modeBtn)


const currentTheme = localStorage.getItem("theme");
// console.log("currentTheme",currentTheme)
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  // console.log('button clicked');    
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
// console.log("theme",theme)
  
});



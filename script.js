var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssCode = document.getElementById("h3");
var body = document.getElementById("body");

// console.log(cssCode);
// console.log(color1);
// console.log(color2);
// console.log(body);

function setBackground(){
    body.style.background = "no-repeat linear-gradient(to right , "+color1.value+ ","+color2.value+" ) center center fixed";
    // console.log(color1.value);
    // console.log(color2.value);
    cssCode.textContent = "linear-gradient(to right , "+color1.value+ ","+color2.value+" );";
}
color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);


  
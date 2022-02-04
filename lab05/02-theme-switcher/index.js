/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const make_default = () => {
   // document.body.className = "";
   let body = document.querySelector("body");
   body.removeAttribute("class");
}
const make_ocean = () => {
   document.body.className = "ocean";
   // let body = document.querySelector("body");
   // body.removeAttribute("class");
   // body.classList.add("ocean")
}
const make_desert = () => {
   document.body.className = "desert";
}
const make_high_contrast = () => {
   document.body.className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', make_default);
document.querySelector("#ocean").addEventListener('click', make_ocean);
document.querySelector("#desert").addEventListener('click', make_desert);
document.querySelector("#high-contrast").addEventListener('click', make_high_contrast);
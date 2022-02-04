/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
let in_dyslexia_mode = false;
const toggle_dyslexia_mode = () => {
  let body = document.querySelector("body");
  
  if (in_dyslexia_mode) {
    body.removeAttribute("class");
    in_dyslexia_mode = false;
  }
  else {
    body.classList.add("dyslexia-mode");
    in_dyslexia_mode = true;
  }
  
}

document.querySelector("#dyslexia-toggle").addEventListener('click', toggle_dyslexia_mode);
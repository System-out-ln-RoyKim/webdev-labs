const makeBigger = () => {
   // alert('make bigger!');
   let My_Header = document.getElementsByTagName("h1")[0];
   let My_Header_style = window.getComputedStyle(My_Header, null).getPropertyValue('font-size');
   let My_Header_fontSize = parseFloat(My_Header_style);
   My_Header.style.fontSize = (My_Header_fontSize + 10) + "px";

   let content = document.getElementsByClassName("content")[0];
   let content_style = window.getComputedStyle(content, null).getPropertyValue('font-size');
   let content_fontSize = parseFloat(content_style);
   content.style.fontSize = (content_fontSize + 10) + "px";
};

const makeSmaller = () => {
   // alert('make smaller!');
   let My_Header = document.getElementsByTagName("h1")[0];
   let My_Header_style = window.getComputedStyle(My_Header, null).getPropertyValue('font-size');
   let My_Header_fontSize = parseFloat(My_Header_style);
   My_Header.style.fontSize = (My_Header_fontSize - 10) + "px";

   let content = document.getElementsByClassName("content")[0];
   let content_style = window.getComputedStyle(content, null).getPropertyValue('font-size');
   let content_fontSize = parseFloat(content_style);
   content.style.fontSize = (content_fontSize - 10) + "px";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

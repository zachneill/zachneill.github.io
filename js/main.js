$(document).ready(function(){
  gone = false;
  setTimeout(reveal, 500);
  animateCSS(".main-title", 'bounceInUp').then((message) => {
    animateCSS(".main-title", 'pulse');
  });
  animateCSS(".bullet-1", "lightSpeedInLeft");
  animateCSS(".bullet-2", "lightSpeedInRight");
});

const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve, reject) => {  
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);
  node.classList.add(`${prefix}animated`, animationName);
  $(element).removeClass("opacity-0");
  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }
  node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

function reveal(){
  $(".revealer").addClass("transitionOut");
}
// $( window ).scroll(function() {  // if relatively off screen
//   if ($('.main-title').offset().top < ($(window).scrollTop() + ($(window).height() / 3)) && (gone==false)) {
//     gone = true;
//     animateCSS(".main-title", "bounceOutDown").then((message) => {
//       $(".main-title").addClass("opacity-0");
//     });
//     animateCSS(".bullet-1", "lightSpeedOutRight").then((message) => {
//       $(".bullet-1").addClass("opacity-0");
//     });
//     animateCSS(".bullet-2", "lightSpeedOutLeft").then((message) => {
//       $(".bullet-2").addClass("opacity-0");
//     });
//   } else if (gone==true) {
//     animateCSS(".main-title", 'bounceInUp').then((message) => {
//       animateCSS(".main-title", 'pulse');
//     });
//     animateCSS(".bullet-1", "lightSpeedInLeft");
//     animateCSS(".bullet-2", "lightSpeedInRight");
//   };
// });
// export default function animate(element, animation, prefix = 'animate__'){
//   animateCSS(element, animation, prefix= 'animate__');
// }
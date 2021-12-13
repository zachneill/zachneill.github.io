$(document).ready(function(){
  animateCSS(".navbar-brand", "flipInX");
  setTimeout(revealFooter, 100);
  setTimeout(revealEmail, 300);
  setTimeout(revealMessage, 400);
  setTimeout(revealSubmit, 500);
  animateCSS(".get-in-touch", 'bounceInUp').then((message) => {
    animateCSS(".get-in-touch", 'pulse');
  });
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
};
function revealSubmit(){
  animateCSS(".submitBtn", "fadeInUpBig");
};
function revealEmail(){
  animateCSS(".email", "fadeInUpBig");
};
function revealMessage(){
  animateCSS(".message", "fadeInUpBig");
};
function revealFooter(){
  animateCSS(".footer", "bounceInUp");
};
function fadeToPage(page){
  animateCSS(".navbar-brand", 'flipOutX').then((message) => {
    $(".navbar-brand").addClass("opacity-0");
  });
  animateCSS(".all-no-nav", 'bounceOutDown').then((message) => {
    $(".all-no-nav").addClass("opacity-0");
    if (page == "about"){
      location.href = 'about.html';
    } else if (page == "contact"){
      location.href = 'contact.html';
    } else {
      location.href = 'index.html';
    };
  });
};
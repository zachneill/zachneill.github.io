$(document).ready(function(){
    animateCSS(".navbar-brand", "flipInX");
    setTimeout(revealBQ, 200);
    setTimeout(revealFooter, 500);
    animateCSS(".about-me", 'bounceInUp').then((message) => {
      animateCSS(".about-me", 'pulse');
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
  function revealBQ(){
    animateCSS(".bq-div", "bounceInUp");
  }
  function fadeToPage(page){
    $(".navbar-collapse").collapse('hide');
    $(".footer").addClass("transitionOut");
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
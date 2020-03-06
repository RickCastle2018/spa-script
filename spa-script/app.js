// SPA Script v0.2(edited) based on Tap Bar Navigation (https://codepen.io/borntofrappe/pen/qwqPwq)
// Author: @RickCastle2018

// target all anchor link elements
const links = document.querySelectorAll('nav a');
// target all section elements
const sections = document.querySelectorAll('body section')

// function called in response to a click event on the anchor link
function handleClick(e) {
  // prevent the default behavior, but most importantly remove the class of .active from those elements with it
  e.preventDefault();
  links.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });

  sections.forEach(section => {
    if (section.classList.contains('active')) {
      section.classList.remove('active');
    }
  });

  // apply the class of active to underline current anchor link
  this.classList.add("active");

  //apply the class of active to show current section element
  currentSection = document.getElementsByClassName('active')[0].getAttribute('href').slice(1);
  document.getElementsByName(currentSection)[0].classList.add("active");
};

// listen for a click event on each and every anchor link
links.forEach(link => link.addEventListener('click', handleClick));
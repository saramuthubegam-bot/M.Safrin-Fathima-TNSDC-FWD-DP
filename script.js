// Smooth scroll to section

function scrollToSection(sectionId) {

  document.getElementById(sectionId).scrollIntoView({ 

    behavior: "smooth" 

  });

}

// Example contact form action

document.querySelector("form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

});
// Index Page (Start)

function goAbout(){
  window.location = "about.html";
}

function goEd(){
  window.location = "education.html";
}

function goExp(){
  window.location = "exp.html";
}

function goSkills(){
  window.location = "skills.html";
}

function goInt(){
  window.location = "int.html";
}

// Index Page (End)

function goHome(){
  window.location = "index.html";
}

const navSlide = () =>{
  const smallNav = document.querySelector(".smallNav");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  smallNav.addEventListener("click", ()=>{
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link, index)=>{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+2}s`;
  });
}

navSlide();

$(".main-content").delay(800).animate({"opacity": "1"}, 700);

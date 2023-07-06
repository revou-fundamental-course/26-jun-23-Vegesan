function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
  }
  
  function submitForm(event) {
    event.preventDefault();
  }
  
  let slideIndex = 0;
  const slides = document.getElementsByClassName("banner-slide");
  showSlides();
  
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 2000); 
  }
  
  const claimButtons = document.querySelectorAll(".claim-button");
  
  claimButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Coupon Added");
    });
  });
  
  function submitForm(event) {
    event.preventDefault(); 
  
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
  
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (message === "") {
      alert("Please enter your message.");
      return;
    }
  
    alert("Form submitted successfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

function formsubmit(){
  if (document.getElementById("name").value!=""){
// POST request using fetch()
fetch("http://localhost:4000/FormData", {
	
// Adding method type
method: "POST",

// Adding body or contents to send

body: JSON.stringify({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  sub: document.getElementById("sub").value,
  msg: document.getElementById("msg").value
  
}),


// Adding headers to the request
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));

alert("Your Message has been submitted successfully")
}
else{
  alert("Please fill the form first!")
}
}



$(document).ready(function () {
    $(window).scroll(function () {
      // Sticky navbar on scroll script
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button show/hide script
      if ($(this).scrollTop() > 1600) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // Slide-up script
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  
    $(".navbar .menu li a").click(function () {
      // Applying smooth scroll on menu items click
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800
      );
    });
  
    // Toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Full stack developer.",
        "Python Developer.",
        "React Developer.",
        "Lifelong Learner."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed2 = new Typed(".typing-2", {
      strings: [
        "Full stack developer.",
        "Python Developer.",
        "React Developer.",
        "Lifelong Learner."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // Owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  
function feedBack() {
    let myName = document.getElementById("name").value;
    let myEmail = document.getElementById("email").value;
    let mySubject = document.getElementById("subject").value;
    let myMessage = document.getElementById("message").value;

    if (myName == null || myName == "") {
        alert("Please enter your Name");
        return false;
    } else if (myEmail == null || myEmail == "" || !myEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address");
        return false;
    } else if (mySubject == null || mySubject == "") {
        alert("Please enter a valid subject");
        return false;
    } else if (myMessage == null || myMessage == "") {
        alert("Please enter a message");
        return false;
    } else {
        alert("Welcome " + myName + ", your message to danielmuthama23@gmail.com has been sent successfully. We will respond ASAP!");
        return true;
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Data Scientist", "Software Developer", "Cloud Developer", "AI and Data Engineer", "Network Engineer", "UI|UX Designer", "Telecom. Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Scientist", "Software Developer", "Cloud Developer", "AI and Data Engineer", "Network Engineer", "UI|UX Designer", "Telecom. Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
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
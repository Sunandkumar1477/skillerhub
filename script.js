document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        console.log("Menu button clicked"); // Debugging line
        navMenu.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        console.log("Document clicked"); // Debugging line
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            console.log("Closing menu"); // Debugging line
            navMenu.classList.remove("open");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.about-image');
    const paragraphs = document.querySelectorAll('.about-text p');
    
    let currentIndex = 0;
    const totalImages = images.length;

    function showNextImage() {
        // Hide all images
        images.forEach(image => image.classList.remove('active'));
        paragraphs.forEach(p => p.classList.remove('highlighted'));

        // Show the next image
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
        images[currentIndex].classList.add('active');

        // Highlight the corresponding paragraph
        paragraphs[currentIndex].classList.add('highlighted');
    }

    // Start the image slider
    setInterval(showNextImage, 3000); // Change image every 3 seconds

    // Show the first image and paragraph on load
    images[currentIndex].classList.add('active');
    paragraphs[currentIndex].classList.add('highlighted');
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all sections
    const sections = document.querySelectorAll("section");

    // Function to handle section appearance
    function handleSection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;

                // Add a class to trigger animation
                section.classList.add("active-section");

                // Call the respective special event function
                triggerSpecialEvent(section.id);
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleSection, {
        root: null,
        threshold: 0.3 // Section should be 30% visible before triggering
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));

    // Special events for each section
    function triggerSpecialEvent(sectionId) {
        switch (sectionId) {
            case "home":
                console.log("Welcome to SkilleR7! Empowering Your Skills.");
                document.querySelector(".hero-content h2").classList.add("pulse-animation");
                break;
            case "about":
                console.log("About SkilleR7: Discover our vision!");
                document.querySelector("#about h2").classList.add("highlight");
                break;
            case "choose":
                console.log("Why Choose Skiller7? We value talent over money!");
                document.querySelector(".choose-container").classList.add("fade-in");
                break;
            case "services":
                console.log("Explore our services and find the best professionals!");
                document.querySelector(".services").classList.add("bounce-animation");
                break;
            case "promotions":
                console.log("Promote your business with Skiller7!");
                document.querySelector(".promotions-text h2").classList.add("flash-animation");
                break;
            case "skiller7-community":
                console.log("Join our passionate community!");
                document.querySelector(".team-container").classList.add("grow-animation");
                break;
            case "meet-our-team":
                console.log("Meet the amazing minds behind Skiller7!");
                document.querySelector(".meet-team-section h2").classList.add("shake-animation");
                break;
            case "what-skiller7-offers":
                console.log("Discover what Skiller7 has to offer for you!");
                document.querySelector(".offers-container").classList.add("slide-in");
                break;
            case "contact":
                console.log("Get in touch with us today!");
                document.querySelector(".contact-content").classList.add("zoom-animation");
                break;
            default:
                console.log("You're exploring SkilleR7!");
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach((member) => {
        member.addEventListener("mouseenter", () => {
            member.style.transform = "scale(1.05)"; // Smooth pop-out effect
        });

        member.addEventListener("mouseleave", () => {
            member.style.transform = "scale(1)"; // Reset
        });
    });
});

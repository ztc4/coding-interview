// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
	const scroll = document.documentElement.scrollTop;
	if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
	} else {
	document.querySelector('body').classList.remove('scroll')
	}
});
// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}


// get current year for credit in footer
document.querySelector("#current-year").textContent = new Date().getFullYear();



document.addEventListener("DOMContentLoaded", function () {
    const serviceLinks = document.querySelectorAll(".navbar a");
    const serviceSections = document.querySelectorAll(".service");

    serviceLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedService = e.target.getAttribute("data-service");

            serviceLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            e.target.classList.add("active");

            // Hide all service sections
            serviceSections.forEach((section) => {
                section.style.display = "none";
            });

            // Show the selected service section
            const selectedSection = document.getElementById(selectedService);
            selectedSection.style.display = "flex";
        });
    });

    // Initially, show the first service (e.g., "Salmon")
    document.getElementById("salmon").style.display = "flex";
	// Initially, show the first service (e.g., "Salmon")
    document.getElementById("salmon").classList.add("active");
});


/*==================================================
                VINZSYSTEMS
                script.js v1.0
==================================================*/

"use strict";

/*==================================================
                DOM ELEMENTS
==================================================*/

// Header
const header = document.querySelector(".header");

// Navigation
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section[id]");

// Service Buttons
const serviceButtons = document.querySelectorAll(".service-buttons button");

// Preview Elements
const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");

// Demo Overlay
const launchDemo = document.getElementById("launchDemo");
const demoOverlay = document.getElementById("demoOverlay");
const closeDemo = document.getElementById("closeDemo");
const demoTitle = document.getElementById("demoTitle");
const demoFrame = document.getElementById("demoFrame");


/*==================================================
                DASHBOARD DATA
==================================================*/

const dashboards = {

    dashboard: {

        title: "Business Operations Dashboard",

        image: "images/dashboard-demo.png",

        description:
            "A cloud-based dashboard designed to simplify reporting, monitor business performance, automate repetitive tasks, and provide real-time insights using Google Sheets, Apps Script, and modern automation techniques.",

        demo:
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGBV0EIAktMJs2AKJw-OjuWFD-iMlLe7NrZaR2ii985mXy-btBTgXe88VO5U5Z38v46rRBwDhyFmBe/pubhtml?widget=true&headers=false"

    },

    coming: {

        title: "Coming Soon",

        image: "images/coming-soon.png",

        description:
            "This solution is currently under development and will be available soon. Stay tuned for future releases from VinzSystems.",

        demo: ""

    }

};
/*==================================================
                STICKY HEADER
==================================================*/

function toggleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

// Run immediately
toggleHeader();

// Run while scrolling
window.addEventListener("scroll", toggleHeader);


/*==================================================
                ACTIVE NAVIGATION
==================================================*/

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

// Run immediately
updateActiveNav();

// Update while scrolling
window.addEventListener("scroll", updateActiveNav);
/*==================================================
                SERVICE SWITCHER
==================================================*/

let currentDashboard = "dashboard";

serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        serviceButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        // Activate selected button
        button.classList.add("active");

        // Get selected dashboard
        currentDashboard = button.dataset.demo;

        // Get dashboard data
        const data = dashboards[currentDashboard];

        // Safety check
        if (!data) return;

        // Update preview image
        previewImage.src = data.image;
        previewImage.alt = data.title;

        // Update preview text
        previewTitle.textContent = data.title;
        previewDescription.textContent = data.description;

    });

});
/*==================================================
                DEMO OVERLAY
==================================================*/

function openDemo() {

    // Get dashboard data
    const data = dashboards[currentDashboard];

    // Safety check
    if (!data) return;

    // Update overlay title
    demoTitle.textContent = data.title;

    // Load dashboard if available
    if (data.demo) {

        demoFrame.src = data.demo;

    } else {

        // Coming Soon / No Demo Available
        demoFrame.src = "about:blank";

    }

    // Show overlay
    demoOverlay.classList.add("active");

}


function closeDemoPanel() {

    // Hide overlay
    demoOverlay.classList.remove("active");

    // Stop the embedded page
    demoFrame.src = "";

}


// Launch Demo Button
if (launchDemo) {

    launchDemo.addEventListener("click", openDemo);

}


// Close Button
if (closeDemo) {

    closeDemo.addEventListener("click", closeDemoPanel);

}


// Click Outside Overlay
if (demoOverlay) {

    demoOverlay.addEventListener("click", (event) => {

        if (event.target === demoOverlay) {

            closeDemoPanel();

        }

    });

}
/*==================================================
                UX POLISH
==================================================*/

// Close demo using the Escape key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        demoOverlay &&
        demoOverlay.classList.contains("active")
    ) {

        closeDemoPanel();

    }

});


/*==================================================
                INITIALIZE
==================================================*/

window.addEventListener("load", () => {

    // Initialize header state
    toggleHeader();

    // Initialize active navigation
    updateActiveNav();

    // Load default dashboard preview
    const data = dashboards[currentDashboard];

    if (data) {

        previewImage.src = data.image;
        previewImage.alt = data.title;

        previewTitle.textContent = data.title;

        previewDescription.textContent = data.description;

    }

    // Highlight default active service button
    serviceButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.demo === currentDashboard
        );

    });

});
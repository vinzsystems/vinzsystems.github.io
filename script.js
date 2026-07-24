/* ==========================================
   PORTFOLIO MODAL
========================================== */

const portfolioButtons = document.querySelectorAll(".portfolio-card .btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

const portfolioProjects = [
    {
        title: "Business Dashboard",
        image: "images/dashboard-demo.png",
        description:
            "Interactive Google Sheets dashboard with KPIs, charts, automated reports, and real-time monitoring."
    },
    {
        title: "Workflow Automation",
        image: "images/workflow.png",
        description:
            "Automated approval workflows, email notifications, document generation, and data synchronization."
    },
    {
        title: "Inventory Management",
        image: "images/inventory.png",
        description:
            "Inventory tracking system with stock monitoring, barcode support, supplier management, and reporting."
    },
    {
        title: "Sales Dashboard",
        image: "images/sales.png",
        description:
            "Sales analytics dashboard with charts, customer insights, forecasting, and monthly reports."
    }
];

/* Create Modal */
const portfolioModal = document.createElement("div");
portfolioModal.className = "portfolio-modal";

portfolioModal.innerHTML = `
    <div class="portfolio-modal-content">

        <span class="portfolio-close">&times;</span>

        <img id="portfolioImage" src="" alt="">

        <h2 id="portfolioTitle"></h2>

        <p id="portfolioDescription"></p>

    </div>
`;

document.body.appendChild(portfolioModal);

const modalImage = document.getElementById("portfolioImage");
const modalTitle = document.getElementById("portfolioTitle");
const modalDescription = document.getElementById("portfolioDescription");
const closeModal = document.querySelector(".portfolio-close");

/* Open Modal */

portfolioButtons.forEach((button, index) => {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        modalImage.src = portfolioProjects[index].image;
        modalTitle.textContent = portfolioProjects[index].title;
        modalDescription.textContent = portfolioProjects[index].description;

        portfolioModal.classList.add("show");

    });

});

/* Close Button */

closeModal.addEventListener("click", function() {

    portfolioModal.classList.remove("show");

});

/* Click Outside */

portfolioModal.addEventListener("click", function(e) {

    if (e.target === portfolioModal) {

        portfolioModal.classList.remove("show");

    }

});

/* ESC Key */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        portfolioModal.classList.remove("show");

    }

});
/* ==========================================
   HERO APP
========================================== */

const heroContent = document.getElementById("heroContent");
const heroDashboard = document.getElementById("heroDashboard");

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navServices = document.getElementById("navServices");
const navProjects = document.getElementById("navProjects");
const navContact = document.getElementById("navContact");

const pages = {

    home: {

        left: heroContent.innerHTML,

        right: heroDashboard.innerHTML

    },

    about: {

        left: `

<p class="small-title">
    ABOUT VINZSYSTEMS
</p>

<h1>
    Turning Ideas Into
    <span>Business Automation.</span>
</h1>

<p class="description">
    VinzSystems helps businesses automate workflows through
    Google Sheets, Apps Script, Excel Automation, and custom
    web development. Every solution is designed to save time,
    reduce repetitive work, and improve productivity.
</p>

<div class="buttons">

    <a href="#" class="btn-primary" id="btnFounder">
    About VinzSystems
</a>

</div>

`,

        right: `

<div class="dashboard-header">

    <h3>About VinzSystems</h3>

    <span class="status">
        ● Since 2017
    </span>

</div>

<div class="dashboard-body">

    <div class="metric">

        <p>Mission</p>

        <Large>
            Build smart automation that helps businesses work faster.
        </Large>

    </div>

    <div class="metric">

        <p>Specialty</p>

        <h2>Automation</h2>

    </div>

    <div class="metric">

        <p>Technology</p>

        <Large>
            Google Sheets • Apps Script • Excel • HTML • CSS • JavaScript
        </Large>

    </div>

</div>

`

    }, 

    services: {

    left: `

<p class="small-title">
    OUR SERVICES
</p>

<h1>
    Smart Solutions
    <span>For Your Business.</span>
</h1>

<p class="description">
    VinzSystems provides automation and development services that
    simplify business processes, eliminate repetitive tasks, and
    improve productivity.
</p>

<div class="buttons">

    <a href="#" class="btn-primary" id="btnServicesCatalog">
    Our Services
</a>

</div>

`,

    right: `

<div class="dashboard-header">

    <h3>Services</h3>

    <span class="status">
        ● Available
    </span>

</div>

<div class="dashboard-body">

    <div class="metric">

        <p>Google Workspace</p>

        <small>
            Google Sheets & Apps Script Automation
        </small>

    </div>

    <div class="metric">

        <p>Development</p>

        <small>
            Custom Websites & Dashboards
        </small>

    </div>

    <div class="metric">

        <p>Automation</p>

        <small>
            Workflow Optimization & Reporting
        </small>

    </div>

</div>

`

},

projects: {

    left: `

<p class="small-title">
    FEATURED PROJECTS
</p>

<h1>
    Real Solutions
    <span>Built for Businesses.</span>
</h1>

<p class="description">
    Explore automation systems, dashboards, workflow solutions,
    and custom web applications designed to increase productivity
    and simplify daily operations.
</p>

<div class="buttons">

    <a href="#" class="btn-primary">
        View Projects
    </a>

</div>

`,

    right: `

<div class="dashboard-header">

    <h3>Projects</h3>

    <span class="status">
        ● Portfolio
    </span>

</div>

<div class="dashboard-body">

    <div class="metric">

        <p>Completed Systems</p>

        <h2>10+</h2>

    </div>

    <div class="metric">

        <p>Specialties</p>

        <small>
            Dashboards • Automation • Web Apps
        </small>

    </div>

    <div class="metric">

        <p>Goal</p>

        <small>
            Deliver reliable business solutions.
        </small>

    </div>

</div>

`

},

contact: {

    left: `

<p class="small-title">
    CONTACT US
</p>

<h1>
    Let's Build
    <span>Something Amazing.</span>
</h1>

<p class="description">
    Have a project in mind? Whether it's business automation,
    dashboards, workflow optimization, or a custom web application,
    let's discuss how VinzSystems can help.
</p>

<div class="buttons">

    <a href="mailto:VinzSystems@gmail.com" class="btn-primary">
        Send Email
    </a>

</div>

`,

    right: `

<div class="dashboard-header">

    <h3>Contact</h3>

    <span class="status">
        ● Available for Projects
    </span>

</div>

<div class="dashboard-body">

    <div class="metric">

        <p>Email</p>

        <Large>
            VinzSystems@gmail.com
        </Large>

    </div>

    <div class="metric">

        <p>Response Time</p>

        <h2>&lt;24 hrs</h2>

    </div>

    <div class="metric">

        <p>Status</p>

        <small>
            Accepting Freelance Projects
        </small>

    </div>

</div>

`

},

founder:{

    left:`

<p class="small-title">
    MEET THE FOUNDER
</p>

<h1>
    Building Smart
    <span>Digital Solutions.</span>
</h1>

<p class="description founder-description">
    VinzSystems was founded by an Information Technology graduate with
    a passion for automation, software development, and business innovation.
    Combining technical expertise with real-world operational experience,
    VinzSystems focuses on creating practical digital solutions that simplify
    workflows, improve productivity, and help businesses embrace automation.
</p>

<div class="buttons">

    <a href="#" class="btn-primary">
        Download Resume
    </a>

</div>

`,

    right:`

<div class="dashboard-header">

    <h3>Founder Profile</h3>

    <span class="status">
        ● Professional
    </span>

</div>

<div class="dashboard-body">

    <div class="metric">

        <p><strong>Education</strong></p>

        <small>
            BS Information Technology
            <br>
            Major in Programming
        </small>

    </div>

    <div class="metric">

    <p><strong>Expertise</strong></p>    
    

        <small>
            Google Apps Script,
            Google Workspace,
            Excel Automation,
            Web Development
        </small>

    </div>

    <div class="metric">

        <p><strong>Mission</strong></p> 

        <small>
            Helping organizations automate workflows
            through reliable and modern technology.
        </small>

    </div>

</div>

`

},





};


/* ==========================================
   HERO PAGE FUNCTION
========================================== */

function showPage(page) {

    if (!pages[page]) return;

    heroContent.classList.add("hero-hidden");
    heroDashboard.classList.add("hero-hidden");

    setTimeout(() => {

        heroContent.innerHTML = pages[page].left;
        heroDashboard.innerHTML = pages[page].right;


const btnFounder = document.getElementById("btnFounder");

if(btnFounder){

    btnFounder.addEventListener("click", function(e){

        e.preventDefault();

        showPage("founder");

    });

}

const btnServicesCatalog = document.getElementById("btnServicesCatalog");

if(btnServicesCatalog){

    btnServicesCatalog.addEventListener("click", function(e){

        e.preventDefault();

        showPage("serviceCatalog");

    });

}
        heroContent.classList.remove("hero-hidden");
        heroDashboard.classList.remove("hero-hidden");

    }, 450);

}

/* ==========================================
   NAVIGATION
========================================== */

navHome.addEventListener("click", function(e){

    e.preventDefault();

    showPage("home");

});

navAbout.addEventListener("click", function(e){

    e.preventDefault();

    showPage("about");

});
navServices.addEventListener("click", function(e){

    e.preventDefault();

    showPage("services");

});

navProjects.addEventListener("click", function(e){

    e.preventDefault();

    showPage("projects");

});

navContact.addEventListener("click", function(e){

    e.preventDefault();

    showPage("contact");

});
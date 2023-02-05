const navButton = document.getElementById("nav__toggler__btn")
const navbar = document.getElementById("nav__navigation")
const navItems = document.getElementsByClassName("nav__navigation__item")
// const projectsSection = document.querySelector("#projects .section__content")

const toggleNavbar = () => {
    let style = getComputedStyle(navbar)
        if (navbar.classList.contains("show")) {
            navbar.classList.remove("show")
            // projectsSection.style.zIndex = 0
        } else if (style.display == "none") {
            navbar.classList.add("show")
            // projectsSection.style.zIndex = -1
        }
}
navButton.addEventListener("click", toggleNavbar)

for (const iterator of navItems) {
    iterator.addEventListener("click", () => toggleNavbar())
}


// Slider

let page = 0;
let projects = []

const next = document.getElementsByClassName("next");
const previous = document.getElementsByClassName("previous");

const projectsList = document.getElementsByClassName("project")

for (const iterator of projectsList) {
    projects.push(`#${iterator.id}`);
}

for (const btn of next) {
    btn.addEventListener("click", () => {
        page++
        if (page > projects.length - 1)
            page = 0
        goToProject()
    })
}

for (const btn of previous) {
    btn.addEventListener("click", () => {
        page--
        if (page < 0)
            page = projects.length - 1
        goToProject()
    })
}

const goToProject = () => {
    let projectsContainer = document.getElementsByClassName("projects__container")[0]
    let width = projectsContainer.clientWidth
    let position = width * page
    projectsContainer.scrollTo(position, 0)
}


// Bug de fixed


function windowResized() {
    const nav = document.querySelector(".nav__container");
    const wrapper = document.querySelector(".wrapper");
    const styles = getComputedStyle(wrapper)
    console.log(styles.position)
    if (styles.position == "fixed") {
        wrapper.style.width = `${nav.clientWidth}px`;
    } else {
        wrapper.style.width = ""
    }
    // 4px = 2*2px child padding (right/left)
}

window.addEventListener("resize", windowResized);
windowResized();

let links = document.querySelectorAll(".nav__navigation__item a");


onpopstate = (event) => {
    let hash = window.location.hash
    for (const link of links) {
        link.classList.remove("selected")
        if (link.href.toString().includes(hash)) {
            link.classList.add("selected")
        }    
    }
}
document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header h1, header p", { opacity: 0, y: -20, duration: 1 });
    gsap.from("nav ul li", { opacity: 0, y: 10, duration: 0.5, stagger: 0.2 });
});

const projects = [
    { name: "Вёрстка сайта", description: "Данная работа была выполнена на 2 курсе. Основная задача заключалась сверстать сайт точь в точь", link: "https://github.com/hamletsspeak/hamletsspeak.github.io" },
    { name: "Создание собственного веб-приложения", description: "Эта работа была выполнена на практике на 3 курсе. Необходимо было освоить основы фреймвора Ruby on Rails и создать собственное веб-приложение.", link: "hhttps://github.com/hamletsspeak/Rails-App" },
    { name: "Сайт визитка для магазина автозапчастей", description: "Сайт был создан для продвижения магазина. Но в итоге сайт остался лишь в моём гитхабе", link: "https://github.com/hamletsspeak/webparts" },
];

let currentPage = 1;
const projectsPerPage = 2;

function displayProjects() {
    const projectContainer = document.getElementById("project-container");
    projectContainer.innerHTML = "";
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const currentProjects = projects.slice(start, end);

    currentProjects.forEach(proj => {
        const projectElem = document.createElement("div");
        projectElem.classList.add("project");
        projectElem.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p><a href="${proj.link}" target="_blank">Смотреть на GitHub</a>`;
        projectContainer.appendChild(projectElem);
    });
    document.getElementById("page-num").textContent = currentPage;
}

document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage * projectsPerPage < projects.length) {
        currentPage++;
        displayProjects();
    }
});

displayProjects();

document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header h1, header p", { opacity: 0, y: -20, duration: 1 });
    gsap.from("nav ul li", { opacity: 0, y: 10, duration: 0.5, stagger: 0.2 });

    // Анимация появления секций при скролле
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Начинает анимацию, когда секция на 80% в зоне видимости
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Анимация карточек проектов
    gsap.utils.toArray(".project").forEach(project => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2
        });
    });
});

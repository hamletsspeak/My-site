document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { 
            name: "Вёрстка сайта", 
            description: "Этот проект был выполнен на 2 курсе. Основная цель заключалась в том, чтобы воссоздать макет сайта в точности, как он был задуман дизайнером, с соблюдением всех отступов, цветов и шрифтов.", 
            link: "https://github.com/hamletsspeak/hamletsspeak.github.io" 
        },
        { 
            name: "Веб-приложение", 
            description: "В рамках практики на 3 курсе я разработал веб-приложение, используя фреймворк Ruby on Rails. В ходе работы я изучил основы MVC-архитектуры, баз данных и взаимодействие с REST API.", 
            link: "https://github.com/hamletsspeak/Rails-App" 
        },
        { 
            name: "Сайт для магазина", 
            description: "Проект включал создание одностраничного сайта-визитки для магазина автозапчастей. На сайте представлены основные услуги, контактная информация и форма обратной связи.", 
            link: "https://github.com/hamletsspeak/webparts" 
        }
    ];

    let currentPage = 0;
    const projectContainer = document.getElementById("project-container");
    const pageNum = document.getElementById("page-num");

    // Создаём единственный div для проекта
    const projectElem = document.createElement("div");
    projectElem.classList.add("project");
    projectContainer.appendChild(projectElem);

    function displayProject(index, direction = "next") {
        const proj = projects[index];

        // Убираем текущий проект плавно
        projectElem.style.opacity = "0";
        projectElem.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";

        setTimeout(() => {
            // Меняем контент
            projectElem.innerHTML = `
                <h3>${proj.name}</h3>
                <p>${proj.description}</p>
                <a href="${proj.link}" target="_blank">Смотреть на GitHub</a>
            `;

            // Показываем новый проект плавно
            projectElem.style.opacity = "1";
            projectElem.style.transform = "translateX(0)";
        }, 300);

        pageNum.textContent = index + 1;
    }

    document.getElementById("prev-page").addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            displayProject(currentPage, "prev");
        }
    });

    document.getElementById("next-page").addEventListener("click", () => {
        if (currentPage < projects.length - 1) {
            currentPage++;
            displayProject(currentPage, "next");
        }
    });

    displayProject(currentPage);
});



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Запускаем при загрузке страницы
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function changeBackground() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let distanceFromTop = scrollY - sectionTop;

            if (distanceFromTop >= -windowHeight / 2 && distanceFromTop < sectionHeight) {
                let progress = (distanceFromTop + windowHeight / 2) / sectionHeight;
                let color1, color2;

                if (section.id === "about") {
                    color1 = `rgb(${255 - progress * 100}, 126, 179)`;
                    color2 = `rgb(${255 - progress * 120}, 117, 140)`;
                } else if (section.id === "projects") {
                    color1 = `rgb(${106 - progress * 50}, 17, 203)`;
                    color2 = `rgb(${37 - progress * 20}, 117, 252)`;
                } else if (section.id === "contact") {
                    color1 = `rgb(${255 - progress * 80}, 154, 68)`;
                    color2 = `rgb(${252 - progress * 90}, 96, 118)`;
                }

                section.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
            }
        });
    }

    window.addEventListener("scroll", changeBackground);
    changeBackground(); // Запуск при загрузке страницы
});

document.addEventListener("scroll", function() {
    // Обработчик для всех секций
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Рассчитываем эффект параллакса для фона
        const depth = (scrollPosition - sectionTop) * 0.3; // Чем больше множитель, тем сильнее эффект
        section.querySelector("::before").style.transform = `translateY(${depth}px)`;

        // Параллакс-эффект для текста
        const text = section.querySelector("h2");
        if (text) {
            const textGradient = `linear-gradient(45deg, #ff5e62, #ff9966, rgba(255, 150, 255, 0.8))`;
            text.style.background = textGradient;
            text.style.backgroundSize = `${100 + (scrollPosition - sectionTop) / 10}%`; // Изменяем размер градиента

            // Эффект движения текста
            const moveEffect = (scrollPosition - sectionTop) * 0.2;
            text.style.transform = `translateY(${moveEffect}px)`; // Текст будет двигаться вверх
        }
    });
});

window.addEventListener('resize', function() {
    let header = document.querySelector('header');
    let headerHeight = header.offsetHeight;
    let viewportHeight = window.innerHeight;

    // Если высота header больше, чем экран, делаем это значение автоматически
    if (headerHeight < viewportHeight) {
        header.style.height = `${viewportHeight}px`;
    } else {
        header.style.height = 'auto';
    }
});

// Вызовем при загрузке страницы для начальной установки
window.dispatchEvent(new Event('resize'));

let isChanged = false;

document.querySelector("button").addEventListener("click", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const nav = document.querySelector("nav");
    const aside = document.querySelector("aside");
    const svgElements = document.querySelectorAll("svg circle, svg line");

    if (!isChanged) {
        // Rangi o‘zgartirish
        header.style.backgroundColor = "gray";
        footer.style.backgroundColor = "gray";
        nav.style.backgroundColor = "#FFDAB9";
        aside.style.backgroundColor = "#FFDAB9";

        svgElements.forEach(el => {
            el.setAttribute("fill", "skyblue");
            el.setAttribute("stroke", "skyblue");
        });

        isChanged = true;
    } else {
        // Asliga qaytarish
        header.style.backgroundColor = "#a7e61c";
        footer.style.backgroundColor = "#a7e61c";
        nav.style.backgroundColor = "#f2f4d1";
        aside.style.backgroundColor = "#f2f4d1";

        svgElements.forEach(el => {
            el.setAttribute("fill", "orange");
            el.setAttribute("stroke", "orange");
        });

        isChanged = false;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let progress = circle.getAttribute("data-progress");
        let angle = (progress / 100) * 360;

        circle.style.background = `conic-gradient(#007bff ${angle}deg,rgb(244, 244, 244) ${angle}deg)`;
    });
});


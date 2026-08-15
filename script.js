/* =========================================
   VASTRA VIBE
   Interactive Website Script
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Smooth scrolling
       ----------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#" || targetId === "") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* -----------------------------------------
       External campaign buttons
       Opens in a NEW TAB
       ----------------------------------------- */

    document.querySelectorAll("[data-action]").forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const action = this.dataset.action;

            if (action === "shop") {

                window.open(
                    "https://rsaisahanaa-cell.github.io/vastra-vibe-campaign/",
                    "_blank",
                    "noopener,noreferrer"
                );

            }

            if (action === "learn") {

                window.open(
                    "https://www.facebook.com/business/ads",
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        });

    });


    /* -----------------------------------------
       Video controls
       ----------------------------------------- */

    const videos = document.querySelectorAll("video");

    videos.forEach(function (video) {

        video.addEventListener("click", function () {

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }

        });

    });


    /* -----------------------------------------
       Simple scroll reveal animation
       ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".objective-card, .setup-card, .creative-card, .swot-card, .optimize-card, .promise-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });


    /* -----------------------------------------
       Current year
       ----------------------------------------- */

    const yearElements = document.querySelectorAll("[data-year]");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* -----------------------------------------
       Mobile video autoplay handling
       ----------------------------------------- */

    videos.forEach(function (video) {

        video.setAttribute("playsinline", "");
        video.setAttribute("preload", "metadata");

    });

});

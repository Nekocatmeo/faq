const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.closest(".faq").classList.toggle("active");
    })
})
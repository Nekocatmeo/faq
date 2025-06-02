// const toggles = document.querySelectorAll(".toggle");

// toggles.forEach((toggle) => {
//     toggle.addEventListener("click", () => {
//         toggle.closest(".faq").classList.toggle("active");
//     })
// })
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const currentFAQ = toggle.closest(".faq");

    // Đóng tất cả các phần tử đang mở, trừ phần tử hiện tại
    document.querySelectorAll(".faq.active").forEach((item) => {
      if (item !== currentFAQ) {
        item.classList.remove("active");
      }
    });

    // Toggle phần tử hiện tại (mở nếu đang đóng, đóng nếu đang mở)
    currentFAQ.classList.toggle("active");
  });
});

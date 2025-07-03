document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      serviceItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
        i.querySelector(".service-content").style.display = "none";
      });
      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".icon").textContent = "−";
        item.querySelector(".service-content").style.display = "block";
      }
    });
  });
});

function toggleFAQ(faqItem) {
  const answer = faqItem.querySelector(".faq-answer");
  const icon = faqItem.querySelector(".icon");
  const isVisible = answer.style.display === "block";
  answer.style.display = isVisible ? "none" : "block";
  icon.style.transform = isVisible ? "rotate(0deg)" : "rotate(45deg)";
}

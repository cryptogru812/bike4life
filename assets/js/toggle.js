function toggleAccordion() {
    const content = document.getElementById("accordionContent");
    const bike = document.getElementById("price-box");
    const arrow = document.getElementById("arrow");
    const priceboxhr = document.getElementById("price-box-hr");
    content.style.display = priceboxhr.style.display = content.style.display === "none" ? "block" : "none";
    arrow.textContent = content.style.display === "none" ? "▸" : "▾";
    bike.style.display === "flex" ? bike.style.display = "none" : bike.style.display = "flex";
  }

  // Optional: start opened or closed
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("accordionContent").style.display = "block";
    document.getElementById("price-box").style.display = "flex";
  });
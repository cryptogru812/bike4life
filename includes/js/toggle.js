function toggleAccordion() {
    const content = document.getElementById("accordionContent");
    const bike = document.getElementById("price-box");
    const arrow = document.getElementById("arrow");
    content.style.display = content.style.display === "none" ? "block" : "none";
    arrow.style.rotate = content.style.display === "none" ? "270deg" : "0deg";
    bike.style.display === "flex" ? bike.style.display = "none" : bike.style.display = "flex";
  }

  function toggleFrame() {
    const content = document.getElementById("frameContent");
    const titan = document.getElementById("titan");
    const arrow = document.getElementById("framearrow");
    content.style.display = content.style.display === "none" ? "block" : "none";
    arrow.style.rotate = content.style.display === "none" ? "270deg" : "0deg";
    titan.style.display === "flex" ? titan.style.display = "none" : titan.style.display = "flex";
  }

  function toggleBsa() {
    const content = document.getElementById("bsaContent");
    const titan = document.getElementById("bsa");
    const arrow = document.getElementById("bsaarrow");
    content.style.display = content.style.display === "none" ? "block" : "none";
    arrow.style.rotate = content.style.display === "none" ? "270deg" : "0deg";
    titan.style.display === "flex" ? titan.style.display = "none" : titan.style.display = "flex";
  }

  function toggleZoll() {
    const content = document.getElementById("zollContent");
    const titan = document.getElementById("zoll");
    const arrow = document.getElementById("zollarrow");
    content.style.display = content.style.display === "none" ? "block" : "none";
    arrow.style.rotate = content.style.display === "none" ? "270deg" : "0deg";
    titan.style.display === "flex" ? titan.style.display = "none" : titan.style.display = "flex";
  }

  function toggleTools() {
    const content = document.getElementById("toolsContent");
    const titan = document.getElementById("tools");
    const arrow = document.getElementById("toolsarrow");
    content.style.display = content.style.display === "none" ? "block" : "none";
    arrow.style.rotate = content.style.display === "none" ? "270deg" : "0deg";
    titan.style.display === "flex" ? titan.style.display = "none" : titan.style.display = "flex";
  }

  // Optional: start opened or closed
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("accordionContent").style.display = "block";
    document.getElementById("price-box").style.display = "flex";
    document.getElementById("frameContent").style.display = "block";
    document.getElementById("titan").style.display = "flex";
    document.getElementById("bsaContent").style.display = "block";
    document.getElementById("bsa").style.display = "flex";
    document.getElementById("zollContent").style.display = "block";
    document.getElementById("zoll").style.display = "flex";
    document.getElementById("toolsContent").style.display = "block";
    document.getElementById("tools").style.display = "flex";
  });
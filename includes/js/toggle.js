function slideDown(element, duration = 300) {
  element.style.removeProperty('display');
  let display = window.getComputedStyle(element).display;
  if (display === 'none') display = 'block';
  element.style.display = display;

  const height = element.scrollHeight;
  element.style.overflow = 'hidden';
  element.style.height = '0';
  element.style.opacity = '0';
  element.offsetHeight; // force repaint

  let startTime;

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    element.style.height = height * progress + 'px';
    element.style.opacity = progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.height = '';
      element.style.opacity = '';
      element.style.overflow = '';
    }
  }

  requestAnimationFrame(animate);
}

function slideUp(element, duration = 300) {
  const height = element.scrollHeight;
  element.style.overflow = 'hidden';
  element.style.height = height + 'px';
  element.style.opacity = '1';
  element.offsetHeight; // force repaint

  let startTime;

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    element.style.height = height * (1 - progress) + 'px';
    element.style.opacity = 1 - progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
      element.style.height = '';
      element.style.opacity = '';
      element.style.overflow = '';
    }
  }

  requestAnimationFrame(animate);
}

function toggleSection(contentId, boxId, arrowId) {
  const content = document.getElementById(contentId);
  const box = document.getElementById(boxId);
  const arrow = document.getElementById(arrowId);

  const isVisible = window.getComputedStyle(content).display !== 'none';

  if (isVisible) {
    slideUp(content);
    slideUp(box);
    arrow.style.rotate = "270deg";
  } else {
    slideDown(content);
    slideDown(box);
    arrow.style.rotate = "0deg";
  }
}

function toggleAccordion() {
  toggleSection("accordionContent", "price-box", "arrow");
}
function toggleFrame() {
  toggleSection("frameContent", "titan", "framearrow");
}
function toggleBsa() {
  toggleSection("bsaContent", "bsa", "bsaarrow");
}
function toggleZoll() {
  toggleSection("zollContent", "zoll", "zollarrow");
}
function toggleTools() {
  toggleSection("toolsContent", "tools", "toolsarrow");
}

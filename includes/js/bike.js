function filterBikesByPriceAndTypes() {
  const bikes = [
    { id: 1, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 2000, type: 'Gravel', menuId: 'falkenjagd1' },
    { id: 2, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3500, type: 'Touring', menuId: 'falkenjagd2' },
    { id: 3, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 9000, type: 'Gravel', menuId: 'falkenjagd1' },
    { id: 4, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 8000, type: 'Racing', menuId: 'falkenjagd1' },
    { id: 5, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7500, type: 'Racing', menuId: 'falkenjagd3' },
    { id: 6, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3200, type: 'Gravel', menuId: 'falkenjagd1' },
    { id: 7, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3800, type: 'Touring', menuId: 'falkenjagd3' },
    { id: 8, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3400, type: 'E-bike', menuId: 'falkenjagd1' },
    { id: 9, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7300, type: 'Trekking', menuId: 'falkenjagd1' },
    { id: 10, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 6000, type: 'Gravel', menuId: 'falkenjagd2' },
    { id: 11, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 5400, type: 'Gravel', menuId: 'falkenjagd1' },
    { id: 12, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 4700, type: 'Gravel', menuId: 'falkenjagd1' },
  ]

  const rangeMinElem = document.getElementById("range-min");
  const rangeMaxElem = document.getElementById("range-max");
  const menuText = document.getElementById('menu-text');
  const menuLeftId = document.getElementById('menu-left').dataset.menuLeftId;
  const minPrice = parseInt(rangeMinElem.value) || 0;
  const maxPrice = parseInt(rangeMaxElem.value) || 10000;
  const filteredBikesByType = bikes.filter(bike => bike.type === menuText.textContent);
  const filteredBikesByTypeAndMenuId = filteredBikesByType.filter(bike => bike.menuId === menuLeftId);

  // Return only bikes with price between min and max
  return filteredBikesByTypeAndMenuId.filter(bike => bike.price >= minPrice && bike.price <= maxPrice);
};

function displayBikes() {
  const bikeCrad = document.getElementById("bike-card");
  const priceBox = document.getElementById("price-box");
  const titan = document.getElementById("titan");
  const bsa = document.getElementById("bsa");
  const zoll = document.getElementById("zoll");
  const zolla = document.getElementById("zolla");
  const tools = document.getElementById("tools");
  const customSlider = document.getElementById('custom-slider');
  const filteredBikes = filterBikesByPriceAndTypes();

  bikeCrad.innerHTML = "";
  priceBox.innerHTML = "";
  titan.innerHTML = ""
  bsa.innerHTML = "";
  zoll.innerHTML = "";
  zolla.innerHTML = "";
  tools.innerHTML = "";
  filteredBikes.forEach((bike, index) => {
    const item = document.createElement("div");
    item.className = "bike-card";
    item.id = `bike-card${bike.id}`;
    item.innerHTML = `
          <div class="bike-header">
              <img src="../includes/image/logo.png" alt="Falkenjagd Logo" class="logo">
              <span class="brand-name">Falkenjagd</span>
          </div>
          <div class="bike-image">
              <img src="${bike.image}" alt="Aristos T Bike" onclick="openModal(${index})">
              <div class="compare-mobile">
                  <input type="checkbox" id="compare-mobile${bike.id}" onchange="handleCheck(this, ${bike.id})">
              </div>
          </div>

          <div class="bike-footer">
              <div class="brand">
                  <div class="bike-info">
                      <h3>${bike.title}</h3>
                  </div>
                  <div class="compare">
                      <input type="checkbox" id="compare${bike.id}" onchange="handleCheck(this, ${bike.id})">
                      <label for="compare${bike.id}">Compare</label>
                  </div>
              </div>
              <p class="slogan"><em>${bike.slogan}</em></p>
          </div>
    `;
    bikeCrad.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "price-box";
    item.id = `price-box${bike.id}`
    item.innerHTML = `
          <div class="price-rev">${bike.price}€</div>
          <button class="explore-btn">Explore</button>
          <div class="divider"></div>
          <div class="price" id="framekit2">1.890,00€</div>
          <button class="explore-btn-2" id="framekit3">Explore</button>
          <div class="divider" id="framekit4"></div>
          <ul class="features">
              <li><div><div class="positive"></div></div><p>Excellent price-performance ratio</p></li>
              <li><div><div class="positive"></div></div><p>Minimalistically displays everything that is required</p></li>
              <li><div><div class="negative"></div></div><p>No complete cable integration possible</p></li>
          </ul>
    `;
    priceBox.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "card";
    item.id = `bikeframe${bike.id}`;
    item.innerHTML = `
          <div class="icon">
              <img src="../includes/image/bike-frame-icon.svg" alt="Bike Frame" class="bike-frame" id="bike-frame${bike.id}" />
              <img src="../includes/image/scale.svg" alt="scale" class="scale" id="scale${bike.id}" onclick="modalShow(${bike.id})"/>
          </div>
          <div class="bar-container">
              <div class="bar-comfortable"></div>
              <div class="bar-sporty"></div>
          </div>
          <div class="bar-labels">
              <span>Comfortable</span>
              <span>Sporty</span>
          </div>
          <div class="divider"></div>
          <div class="label">Titan 3/2,5</div>
          <div class="divider"></div>
          <div class="label">double butted</div>
          <div class="divider"></div>
          <div class="label">Parapera Carbon</div>
          <div class="divider"></div>
          <div class="label">8,5 Kg</div>
          <div class="divider"></div>
          <div class="label">ca. 1950g (Size L)</div>
          <div class="divider"></div>
          <div class="label">550g</div>
          <div class="divider"></div>
          <div class="label">Standard</div>
          <div class="divider"></div>
          <div class="label" style="display: none;" id="aerodynamics1">Standard</div>
          <div class="divider" style="display: none;" id="aerodynamics2"></div>
          <div class="label" style="display: none;" id="stiffness1">Standard</div>
          <div class="divider" style="display: none;" id="stiffness2"></div>
          <div class="label" style="display: none;" id="vario1">Standard</div>
          <div class="divider" style="display: none;" id="vario2"></div>
          <div class="label">Partially integrated from down tube</div>
    `;
    titan.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "card"
    item.id = `bsa${bike.id}`;
    item.innerHTML = `
          <div class="bsa">
              <img src="../includes/image/bsa.svg" alt="BSA" />
          </div>
          <div class="first-label">BSA</div>
          <div class="divider"></div>
          <div class="label">Chain , single and double</div>
          <div class="divider" id="translation2"></div>
          <div class="label" id="translation3">10 - 48</div>
          <div class="divider" id="brake3" style="display: none;"></div>
          <div class="label" id="brake2" style="display: none;">10 - 48</div>
          <div class="divider" id="breakdisc3" style="display: none;"></div>
          <div class="label" id="breakdisc2" style="display: none;">10 - 48</div>
    `;
    bsa.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "card";
    item.id = `zolla${bike.id}`;
    item.innerHTML = `
          <div class="zoll">
              <img src="../includes/image/zoll.svg" alt="zoll" />
          </div>
          <div class="zoll-first-label">28 Zoll</div>
          <div class="divider"></div>
          <div class="label">--</div>
          <div class="divider"></div>
          <div class="label">45mm</div>
          <div class="divider"></div>
          <div class="label">145Kg</div>
          <div class="divider"></div>
          <div class="label">--</div>
          <div class="divider"></div>
          <div class="label">45mm</div>
          <div class="divider"></div>
          <div class="label">145Kg</div>
    `;
    zolla.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "card";
    item.id = `zoll${bike.id}`;
    item.innerHTML = `
          <div class="zoll">
              <img src="../includes/image/zoll.svg" alt="zoll" />
          </div>
          <div class="zoll-first-label" id="wheel2">28 Zoll</div>
          <div class="divider" id="wheel3"></div>
          <div class="label" id="tire2">--</div>
          <div class="divider" id="tire3"></div>
          <div class="label" id="tire4">45mm</div>
          <div class="divider"></div>
          <div class="label">145Kg</div>
    `;
    zoll.appendChild(item);
  });
  filteredBikes.forEach((bike) => {
    const item = document.createElement("div");
    item.className = "card";
    item.id = `tools${bike.id}`;
    item.innerHTML = `
          <div class="tools">
              <img src="../includes/image/tools.svg" alt="tools"/>
          </div>
          <img src="../includes/image/check.svg" class="first-cyan" id="luggage2"/>
          <div class="divider" id="luggage3"></div>
          <img src="../includes/image/check.svg" id="e-motor2" style="display: none;" class="cyan"/>
          <div class="divider" id="e-motor3" style="display: none;"></div>
          <img src="../includes/image/fail.svg" class="cyan" id="lowrider2"/>
          <div class="divider" id="lowrider3"></div>
          <img src="../includes/image/check.svg" class="cyan" id="mudguard2"/>
          <div class="divider" id="mudguard3"></div>            
          <div class="label">3x</div>
          <div class="divider"></div>           
          <div class="label" id="integrated1" style="display: none;">3x</div>
          <img src="../includes/image/check.svg" class="cyan" id="light2"/>
          <div class="divider" id="light3"></div>
          <img src="../includes/image/fail.svg" class="cyan" id="stand1"/>
    `;
    tools.appendChild(item);
  });
  bikeCrad.addEventListener("scroll", () => {
    priceBox.scrollLeft = bikeCrad.scrollLeft;
    titan.scrollLeft = bikeCrad.scrollLeft;
    bsa.scrollLeft = bikeCrad.scrollLeft;
    zoll.scrollLeft = bikeCrad.scrollLeft;
    tools.scrollLeft = bikeCrad.scrollLeft;
  });
  const a = window.innerWidth > 768 ? 0.8544 : 0.8;
  if (bikeCrad.scrollWidth < window.innerWidth * a) {
    customSlider.style.display = 'none';
  }
  else {
    customSlider.style.display = 'block';
  }
};

function handleCheck(checkbox, id) {
  const groups = [
    { key: 'bike', container: document.getElementById('bike-card'), prefix: 'bike-card' },
    { key: 'price', container: document.getElementById('price-box'), prefix: 'price-box' },
    { key: 'frame', container: document.getElementById('titan'), prefix: 'bikeframe' },
    { key: 'bsa', container: document.getElementById('bsa'), prefix: 'bsa' },
    { key: 'zoll', container: document.getElementById('zoll'), prefix: 'zoll' },
    { key: 'tools', container: document.getElementById('tools'), prefix: 'tools' }
  ];

  // Step 1: Cache initial positions
  const firstRects = new Map();
  groups.forEach(({ container }) => {
    Array.from(container.children).forEach(el => {
      firstRects.set(el, el.getBoundingClientRect());
    });
  });

  // Step 2: Update positions
  const mainGroup = groups[0]; // 'bike' container used to determine logic
  const cards = Array.from(mainGroup.container.children);

  const currentCard = document.getElementById(`${mainGroup.prefix}${id}`);
  const isChecked = checkbox.checked;

  // Remove card from current position to reinsert it later
  const updatedOrder = cards.filter(c => c !== currentCard);

  if (isChecked) {
    // Checked → to top
    updatedOrder.unshift(currentCard);
  } else {
    // Unchecked → after last checked
    let inserted = false;
    for (let i = updatedOrder.length - 1; i >= 0; i--) {
      const cb = updatedOrder[i].querySelector('input[type="checkbox"]');
      if (cb && cb.checked) {
        updatedOrder.splice(i + 1, 0, currentCard);
        inserted = true;
        break;
      }
    }
    if (!inserted) updatedOrder.push(currentCard);
  }

  // Step 3: Apply new order to all groups
  groups.forEach(({ container, prefix }) => {
    updatedOrder.forEach(c => {
      const cardId = c.id.replace(mainGroup.prefix, '');
      const el = document.getElementById(`${prefix}${cardId}`);
      container.appendChild(el);
    });
  });

  // Step 4: FLIP animation
  requestAnimationFrame(() => {
    groups.forEach(({ container }) => {
      Array.from(container.children).forEach(el => {
        const lastRect = el.getBoundingClientRect();
        const firstRect = firstRects.get(el);
        if (!firstRect) return;

        const dx = firstRect.left - lastRect.left;
        const dy = firstRect.top - lastRect.top;

        el.style.transform = `translate(${dx}px, ${dy}px)`;
        el.style.transition = 'transform 0s';

        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.4s ease';
          el.style.transform = 'translate(0, 0)';
        });

        el.addEventListener('transitionend', () => {
          el.style.transition = '';
          el.style.transform = '';
        }, { once: true });
      });
    });
  });
}

function modalShow(index) {
  const modal = document.getElementById('imgModal');
  const scale = document.getElementById(`scale${index}`);
  if (scale) {
    modal.style.display = 'flex';
    modal.style.overflowY = 'auto';
  }
}

function modalhidden() {
  const modal = document.getElementById('imgModal');
  modal.style.display = 'none';
}

function modalClick(e) {
  const modal = document.getElementById('imgModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

function showImage(index) {
  const bikes = filterBikesByPriceAndTypes();
  const modalImg = document.getElementById("modalImage1");
  const prevImg = document.getElementById('prevImg');
  const nextImg = document.getElementById('nextImg');
  const prevBtn = document.getElementById('prev1');
  const nextBtn = document.getElementById('next1');

  // Boundary checks
  if (index < 0 || index >= bikes.length) return;

  // Update main image
  modalImg.src = bikes[index].image;
  modalImg.dataset.imgId = index;

  // Update preview thumbnails
  if (index > 0) {
    prevImg.src = bikes[index - 1].image;
    prevImg.style.display = 'block';
    prevBtn.style.display = 'block';
  } else {
    prevImg.style.display = 'none';
    prevBtn.style.display = 'none';
  }

  if (index < bikes.length - 1) {
    nextImg.src = bikes[index + 1].image;
    nextImg.style.display = 'block';
    nextBtn.style.display = 'block';
  } else {
    nextImg.style.display = 'none';
    nextBtn.style.display = 'none';
  }
}

function closeModal(e) {
  if (e.target.id === "modal1" || e.target.className === "close") {
    const modal = document.getElementById("modal1");
    const modalImg = document.getElementById("modalImage1");
    modal.classList.remove("show");
    modalImg.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      modalImg.classList.add("show");
    }, 400);
  }
}

function openModal(index) {
  const modal = document.getElementById("modal1");
  const modalImg = document.getElementById("modalImage1");
  modalImg.classList.remove("show");
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10);
  showImage(index);
}

function nextImage(e) {
  e.stopPropagation();
  const modalImg = document.getElementById("modalImage1");
  const bikes = filterBikesByPriceAndTypes();
  let index = Number(modalImg.dataset.imgId);
  if (index < bikes.length - 1) {
    modalImg.classList.remove("show");
    setTimeout(() => showImage(index + 1), 200);
  }
}

function prevImage(e) {
  e.stopPropagation();
  const modalImg = document.getElementById("modalImage1");
  let index = Number(modalImg.dataset.imgId);
  if (index > 0) {
    modalImg.classList.remove("show");
    setTimeout(() => showImage(index - 1), 200);
  }
}

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
function toggleZolla() {
  toggleSection("zollContenta", "zolla", "zollarrowa");
}
function toggleTools() {
  toggleSection("toolsContent", "tools", "toolsarrow");
}

function toggleBikeMenu() {
  const menuButtons = [
    { id: 1, text: "Gravel", image: "../includes/image/header/gravel.png" },
    { id: 2, text: "Racing", image: "../includes/image/header/racing.jpg" },
    { id: 3, text: "Touring", image: "../includes/image/header/touring.jpg" },
    { id: 4, text: "E-bike", image: "../includes/image/header/ebike.jpg" },
    { id: 5, text: "Mountainbike", image: "../includes/image/header/mountainbike.jpg" },
    { id: 6, text: "Trekking", image: "../includes/image/header/trekking.jpg" },
  ];
  const bikeMenu = document.getElementById("bike-menu");
  const menuText = document.getElementById("menu-text");
  const dropDown = document.getElementById("dropdown");
  if (bikeMenu.innerHTML === "") {
    menuButtons.forEach((button) => {
      if (menuText.textContent.trim() !== button.text) {
        const item = document.createElement("div");
        item.className = "bike-item";
        item.style.backgroundImage = `url(${button.image})`;

        item.innerHTML = `
                  <div class="menu-gradient">
                      <span class="menu-label">${button.text}</span>
                      <span class="menu-arrow">›</span>
                  </div>
              `;

        // Attach event listener properly
        item.addEventListener("click", () => MenuItemClick(button.text, button.image));
        bikeMenu.appendChild(item);
      }
    });
  } else {
    bikeMenu.innerHTML = "";
  }

  // Proper rotation toggle using transform
  dropDown.style.transform = dropDown.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";

  displayBikes();
}

function toggleMenuLeft() {
  const menuLeft = document.getElementById("menu-left");
  const dropDown1 = document.getElementById("dropdown1");
  menuLeft.style.display = menuLeft.style.display === "none" ? "flex" : "none";
  dropDown1.style.transform = dropDown1.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
  displayBikes();
}

function selectMenuLeftId(div) {
  const menuLeft = document.getElementById('menu-left');
  const headerLeft = document.getElementById('headerleft');
  menuLeft.dataset.menuLeftId = div.dataset.menuLeftId;
  headerLeft.src = div.src;
}

function MenuItemClick(text, image) {
  const LandScapeSection = document.getElementById("landscape-section");
  const menuText = document.getElementById("menu-text");
  menuText.textContent = text;
  LandScapeSection.style.backgroundImage = `url(${image})`;
}

function scrollSlider(direction) {
  const slider = document.getElementById('bike-card');
  if (!slider) return;

  const bikeImage = slider.querySelector('img');
  if (!bikeImage) return;

  const pitch = window.innerWidth > 768 ? 200 : 50;
  const scrollAmount = bikeImage.offsetWidth + pitch;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function updateSlider(event) {
  const rangeMin = document.getElementById("range-min");
  const rangeMax = document.getElementById("range-max");
  const rangeValue = document.getElementById("rangeValue");
  const minGap = 500;

  let min = parseInt(rangeMin.value);
  let max = parseInt(rangeMax.value);

  // Enforce minimum gap between sliders
  if (max - min < minGap) {
    if (event.target.id === "range-min") {
      rangeMin.value = max - minGap;
      min = max - minGap;
    } else {
      rangeMax.value = min + minGap;
      max = min + minGap;
    }
  }

  // Update range display and visuals
  rangeValue.textContent = `${min}€ to ${max}€`;
  fillSlider(min, max);
  displayBikes();
}

function fillSlider(min, max) {
  const sliderTrack = document.getElementById("slider-track");
  const maxRangeValue = 10000;

  const percentMin = (min / maxRangeValue) * 100;
  const percentMax = (max / maxRangeValue) * 100;

  sliderTrack.style.left = `${percentMin}%`;
  sliderTrack.style.width = `${percentMax - percentMin}%`;
}

function initBike() {
  const slider = document.getElementById('bike-card');
  const range = document.getElementById('progressSlider');
  const range1 = document.getElementById('range-min');
  const range2 = document.getElementById('range-max');
  const customSlider = document.getElementById('custom-slider');

  // Update range when scrolling
  slider.addEventListener('scroll', () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const percent = (slider.scrollLeft / maxScroll) * 100;
    range.value = percent;
  });

  // Scroll slider when dragging range input
  range.addEventListener('input', () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const newScrollLeft = (range.value / 100) * maxScroll;
    slider.scrollLeft = newScrollLeft;
  });

  range1.addEventListener('input', () => {
    const a = window.innerWidth > 768 ? 0.8544 : 0.8;
    if (slider.scrollWidth < window.innerWidth * a) {
      customSlider.style.display = 'none';
    }
    else {
      customSlider.style.display = 'block';
    }
  });

  range2.addEventListener('input', () => {
    const a = window.innerWidth > 768 ? 0.8544 : 0.8;
    if (slider.scrollWidth < window.innerWidth * a) {
      customSlider.style.display = 'none';
    }
    else {
      customSlider.style.display = 'block';
    }
  });
  const a = window.innerWidth > 768 ? 0.8544 : 0.8;
  if (slider.scrollWidth < window.innerWidth * a) {
    customSlider.style.display = 'none';
  }
  else {
    customSlider.style.display = 'block';
  }

  const rangeMin = document.getElementById("range-min");
  const rangeMax = document.getElementById("range-max");
  rangeMin.addEventListener("input", updateSlider);
  rangeMax.addEventListener("input", updateSlider);

  document.getElementById("bike-menu").style.display = "flex";
  document.getElementById("dropdown").style.transform = "rotate(0deg)";
  document.getElementById("menu-left").style.display = "none";

  updateSlider();
  displayBikes();
}

window.addEventListener('load', () => {
  initBike();
})

document.getElementById("modalImage1").addEventListener("load", () => {
  document.getElementById("modalImage1").classList.add("show");
});

document.addEventListener('click', (e) => {
  const menuLeft = document.getElementById('menu-left');
  const bikeMenu = document.getElementById('bike-menu');
  const dropdown = document.getElementById('dropdown');
  const dropdown1 = document.getElementById('dropdown1');
  if (!e.target.closest('.header-left')) {
    menuLeft.style.display = 'none';
    dropdown1.style.transform = "rotate(0deg)"
  }

  if (!e.target.closest('.header-menu')) {
    bikeMenu.innerHTML = "";
    dropdown.style.transform = "rotate(0deg)"
  }
  const menuText = document.getElementById("menu-text").textContent.trim();

  if (menuText === "Mountainbike") {
    document.getElementById("fork").textContent = "Suspension Fork";
    document.getElementById("inner").textContent = "Bottom bracket standard";
    document.getElementById("type").textContent = "Gear type";
  } else {
    document.getElementById("fork").textContent = "Fork";
    document.getElementById("inner").textContent = "Inner bearing type";
    document.getElementById("type").textContent = "Circuit type";
  }

  const getById = (id) => document.getElementById(id);
  const toggleElements = (elements, display) => {
    elements.forEach(el => {
      if (el) el.style.display = display;
    });
  };

  const elementGroups = {
    framekitEls: ["framekit", "framekit1", "framekit2", "framekit3", "framekit4"],
    lowriderEls: ["lowrider", "lowrider1", "lowrider2", "lowrider3"],
    zollaEls: ["zolla1", "zolla2"],
    varioEls: ["vario", "vario1", "vario2", "vario3"],
    breakdiscEls: ["breakdisc", "breakdisc1", "breakdisc2", "breakdisc3"],
    brakeEls: ["brake", "brake1", "brake2", "brake3"],
    emotorEls: ["e-motor", "e-motor1", "e-motor2", "e-motor3"],
    wheelEls: ["wheel", "wheel1", "wheel2", "wheel3"],
    tireEls: ["tire", "tire1", "tire2", "tire3"],
    translationEls: ["translation", "translation1", "translation2", "translation3"],
    aeroEls: ["aerodynamics", "aerodynamics1", "aerodynamics2", "aerodynamics3"],
    stiffnessEls: ["stiffness", "stiffness1", "stiffness2", "stiffness3"],
    integratedEls: ["integrated", "integrated1"],
    luggageEls: ["luggage", "luggage1", "luggage2", "luggage3"],
    mudguardEls: ["mudguard", "mudguard1", "mudguard2", "mudguard3"],
    lightEls: ["light", "light1", "light2", "light3"],
    standEls: ["stand", "stand1"]
  };

  for (let key in elementGroups) {
    elementGroups[key] = elementGroups[key].map(getById);
  }  

  const {
    framekitEls, lowriderEls, zollaEls, varioEls, breakdiscEls,
    brakeEls, emotorEls, wheelEls, tireEls, translationEls,
    aeroEls, stiffnessEls, integratedEls, luggageEls,
    mudguardEls, lightEls, standEls
  } = elementGroups;
  // 💡 Example switch-case
  switch (menuText) {
    case "Gravel":
      toggleElements(framekitEls, "");
      toggleElements(lowriderEls, "");
      toggleElements(varioEls, "none");
      toggleElements(brakeEls, "none");
      toggleElements(breakdiscEls, "none");
      toggleElements(zollaEls, "none");
      toggleElements(emotorEls, "none");
      toggleElements(wheelEls, "");
      toggleElements(tireEls, "");
      toggleElements(translationEls, "");
      toggleElements(aeroEls, "none");
      toggleElements(stiffnessEls, "none");
      toggleElements(integratedEls, "none");
      toggleElements(luggageEls, "");
      toggleElements(mudguardEls, "");
      toggleElements(lightEls, "");
      toggleElements(standEls, "");
      break;

    case "Trekking":
      toggleElements(framekitEls, "");
      toggleElements(aeroEls, "none");
      toggleElements(stiffnessEls, "none");
      toggleElements(varioEls, "none");
      toggleElements(translationEls, "none");
      toggleElements(brakeEls, "none");
      toggleElements(breakdiscEls, "");
      toggleElements(zollaEls, "none");
      toggleElements(emotorEls, "none");
      toggleElements(wheelEls, "");
      toggleElements(tireEls, "");
      toggleElements(integratedEls, "none");
      toggleElements(luggageEls, "");
      toggleElements(lowriderEls, "");
      toggleElements(mudguardEls, "");
      toggleElements(lightEls, "");
      toggleElements(standEls, "");
      break;

    case "Racing":
      toggleElements(framekitEls, "");
      toggleElements(aeroEls, "");
      toggleElements(varioEls, "none");
      toggleElements(stiffnessEls, "");
      toggleElements(translationEls, "");
      toggleElements(brakeEls, "");
      toggleElements(breakdiscEls, "");
      toggleElements(zollaEls, "none");
      toggleElements(emotorEls, "none");
      toggleElements(wheelEls, "none");
      toggleElements(tireEls, "none");
      toggleElements(integratedEls, "");
      toggleElements(luggageEls, "none");
      toggleElements(lowriderEls, "none");
      toggleElements(mudguardEls, "none");
      toggleElements(lightEls, "none");
      toggleElements(standEls, "none");
      break;

    case "Mountainbike":
      toggleElements(framekitEls, "");
      toggleElements(varioEls, "");
      toggleElements(translationEls, "none");
      toggleElements(brakeEls, "none");
      toggleElements(breakdiscEls, "");
      toggleElements(zollaEls, "none");
      toggleElements(emotorEls, "none");
      toggleElements(wheelEls, "");
      toggleElements(tireEls, "");
      toggleElements(aeroEls, "none");
      toggleElements(stiffnessEls, "none");
      toggleElements(integratedEls, "none");
      toggleElements(luggageEls, "");
      toggleElements(lowriderEls, "none");
      toggleElements(mudguardEls, "");
      toggleElements(lightEls, "");
      toggleElements(standEls, "");
      break;

    case "E-bike":
      toggleElements(framekitEls, "none");
      toggleElements(lowriderEls, "");
      toggleElements(varioEls, "none");
      toggleElements(brakeEls, "none");
      toggleElements(breakdiscEls, "");
      toggleElements(zollaEls, "");
      toggleElements(emotorEls, "none");
      toggleElements(wheelEls, "");
      toggleElements(tireEls, "");
      toggleElements(translationEls, "");
      toggleElements(aeroEls, "none");
      toggleElements(stiffnessEls, "none");
      toggleElements(integratedEls, "none");
      toggleElements(luggageEls, "");
      toggleElements(mudguardEls, "");
      toggleElements(lightEls, "");
      toggleElements(standEls, "");
      break;

    case "Touring":
      toggleElements(framekitEls, "");
      toggleElements(lowriderEls, "");
      toggleElements(varioEls, "none");
      toggleElements(brakeEls, "none");
      toggleElements(breakdiscEls, "");
      toggleElements(zollaEls, "none");
      toggleElements(emotorEls, "");
      toggleElements(wheelEls, "");
      toggleElements(tireEls, "");
      toggleElements(translationEls, "");
      toggleElements(aeroEls, "none");
      toggleElements(stiffnessEls, "none");
      toggleElements(integratedEls, "none");
      toggleElements(luggageEls, "");
      toggleElements(mudguardEls, "");
      toggleElements(lightEls, "");
      toggleElements(standEls, "");
      break;

    default:
  }

})


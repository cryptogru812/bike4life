const bikeCrad = document.getElementById("bike-card");
const priceBox = document.getElementById("price-box");
const titan = document.getElementById("titan");
const bsa = document.getElementById("bsa");
const zoll = document.getElementById("zoll");
const tools = document.getElementById("tools");

const bikes = [
    { id: 1, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 2000 },
    { id: 2, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3500 },
    { id: 3, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 9000 },
    { id: 4, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 8000 },
    { id: 5, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7500 },
    { id: 6, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3200 },
    { id: 7, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3800 },
    { id: 8, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3400 },
    { id: 9, image: '../includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7300 },
    { id: 10, image: '../includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 6000 },
    { id: 11, image: '../includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 5400 },
    { id: 12, image: '../includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 4700 },
]

const filterBikesByPrice = () => {
    // Get the slider values from the DOM (ensure these elements exist)
    const rangeMinElem = document.getElementById("range-min");
    const rangeMaxElem = document.getElementById("range-max");
    const minPrice = parseInt(rangeMinElem.value) || 0;
    const maxPrice = parseInt(rangeMaxElem.value) || 10000;

    // Return only bikes with price between min and max
    return bikes.filter(bike => bike.price >= minPrice && bike.price <= maxPrice);
};

const displayBikes = () => {

    const filteredBikes = filterBikesByPrice();

    bikeCrad.innerHTML = "";
    priceBox.innerHTML = "";
    titan.innerHTML = ""
    bsa.innerHTML = "";
    zoll.innerHTML = "";
    tools.innerHTML = "";
    filteredBikes.forEach((bike) => {
        const item = document.createElement("div");
        item.className = "bike-card";
        item.id = `bike-card${bike.id}`;
        item.innerHTML = `
            <div class="bike-header">
                <img src="../includes/image/logo.png" alt="Falkenjagd Logo" class="logo">
                <span class="brand-name">Falkenjagd</span>
            </div>
            <div class="bike-image">
                <img src="${bike.image}" alt="Aristos T Bike">
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
            <div class="price">1.890,00€</div>
            <button class="explore-btn-2">Explore</button>
            <div class="divider"></div>
            <ul class="features">
                <li class="first-feature"><div><div class="positive"></div></div><p>Excellent price-performance ratio</p></li>
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
            <div class="divider"></div>
            <div class="label">10 - 48</div>
      `;
        bsa.appendChild(item);
    });
    filteredBikes.forEach((bike) => {
        const item = document.createElement("div");
        item.className = "card";
        item.id = `zoll${bike.id}`;
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
            <img src="../includes/image/check.svg" class="first-cyan"/>
            <div class="divider"></div>
            <img src="../includes/image/fail.svg" class="cyan"/>
            <div class="divider"></div>
            <img src="../includes/image/check.svg" class="cyan"/>
            <div class="divider"></div>            
            <div class="label">3x</div>
            <div class="divider"></div>
            <img src="../includes/image/check.svg" class="cyan"/>
            <div class="divider"></div>
            <img src="../includes/image/fail.svg" class="cyan"/>
      `;
        tools.appendChild(item);
    });
    bikeCrad.addEventListener("scroll", () => {
        priceBox.scrollLeft = bikeCrad.scrollLeft;
        titan.scrollLeft = bikeCrad.scrollLeft;
        bsa.scrollLeft = bikeCrad.scrollLeft;
        zoll.scrollLeft = bikeCrad.scrollLeft;
        tools.scrollLeft = bikeCrad.scrollLeft;
    })
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
    const modalImg = document.getElementById('modalImg');
    const scale = document.getElementById(`scale${index}`);
    if (scale) {
        modalImg.src = '../includes/image/zoomout.png';
        modal.style.display = 'flex';
    }
}

function modalhidden() {
    const modal = document.getElementById('imgModal');
    modal.style.display = 'none';
}

function modalClick(e) {
    const modal = document.getElementById('imgModal');
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

const menuLeft = document.getElementById('menu-left');
const bikeMenu = document.getElementById('bike-menu');
const dropdown = document.getElementById('dropdown');
const dropdown1 = document.getElementById('dropdown1');

document.addEventListener('click', (e) => {
    if(!e.target.closest('.header-left')) {
        menuLeft.style.display = 'none';
        dropdown1.style.transform = "rotate(0deg)"
    }   

    if(!e.target.closest('.header-menu')) {
        bikeMenu.innerHTML = "";    
        dropdown.style.transform = "rotate(0deg)"   
    }
})

window.onload = () => {
    displayBikes();
};

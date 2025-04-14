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
        item.innerHTML = `
            <div class="bike-header">
                <img src="../includes/image/logo.png" alt="Falkenjagd Logo" class="logo">
                <span class="brand-name">Falkenjagd</span>
            </div>
            <div class="bike-image">
                <img src="${bike.image}" alt="Aristos T Bike">
                <div class="compare-mobile">
                    <input type="checkbox" id="compare-mobile${bike.id}" onchange="handleCheck(this)">
                </div>
            </div>

            <div class="bike-footer">
                <div class="brand">
                    <div class="bike-info">
                        <h3>${bike.title}</h3>
                    </div>
                    <div class="compare">
                        <input type="checkbox" id="compare${bike.id}" onchange="handleCheck(this)">
                        <label for="compare${bike.id}">Compare</label>
                    </div>
                </div>
                <p class="slogan"><em>${bike.slogan}</em></p>
            </div>
      `;
        bikeCrad.appendChild(item);
    });
    filteredBikes.forEach(() => {
        const item = document.createElement("div");
        item.className = "price-box";
        item.innerHTML = `
            <div class="price-rev">3.499,00€</div>
            <button class="explore-btn">Explore</button>
            <div class="divider"></div>
            <div class="price">1.890,00€</div>
            <button class="explore-btn-2">Explore</button>
            <div class="divider"></div>
            <ul class="features" style="padding: 0px">
                <li style="padding-top: 43px; padding-bottom: 20px; display: flex; justify-content: center; align-items: center;"><span class="positive">+</span> Excellent price-performance ratio</li>
                <li><span class="positive">+</span> Minimalistically displays everything that is required</li>
                <li><span class="negative">–</span> No complete cable integration possible</li>
            </ul>
      `;
        priceBox.appendChild(item);
    });
    filteredBikes.forEach((filterbike, index) => {
        const item = document.createElement("div");
        item.className = "card";
        item.innerHTML = `
            <div class="icon">
                <img src="../includes/image/bike-frame-icon.svg" alt="Bike Frame" class="bike-frame" id="bike-frame${index}" />
                <img src="../includes/image/scale.svg" alt="scale" class="scale" id="scale${index}" onclick="modalShow(${index})"/>
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
    filteredBikes.forEach(() => {
        const item = document.createElement("div");
        item.className = "card"
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
    filteredBikes.forEach(() => {
        const item = document.createElement("div");
        item.className = "card";
        item.innerHTML = `
            <div class="zoll">
                <img src="../includes/image/zoll.svg" alt="zoll" />
            </div>
            <div class="first-label">28 Zoll</div>
            <div class="divider"></div>
            <div class="label">--</div>
            <div class="divider"></div>
            <div class="label">45mm</div>
            <div class="divider"></div>
            <div class="label">145Kg</div>
      `;
        zoll.appendChild(item);
    });
    filteredBikes.forEach(() => {
        const item = document.createElement("div");
        item.className = "card";
        item.innerHTML = `
            <div class="tools">
                <img src="../includes/image/tools.svg" alt="tools"/>
            </div>
            <div class="dot"><div class="first-cyan"></div></div>
            <div class="divider"></div>
            <div class="dot"><div class="pink"></div></div>
            <div class="divider"></div>
            <div class="dot"><div class="cyan"></div></div>
            <div class="divider"></div>            
            <div class="label">3x</div>
            <div class="divider"></div>
            <div class="dot"><div class="cyan"></div></div>
            <div class="divider"></div>
            <div class="dot"><div class="pink"></div></div>
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

function handleCheck(checkbox) {
    const container = document.getElementById('bike-card');
    const bikeCard = checkbox.closest('.bike-card');

    if (checkbox.checked) {
        // Move checked item to the top
        container.insertBefore(bikeCard, container.firstChild);
    } else {
        // Move unchecked item after all checked items
        const children = Array.from(container.children);
        let lastChecked = null;

        for (let i = 0; i < children.length; i++) {
            const input = children[i].querySelector('input[type="checkbox"]');
            if (input.checked) {
                lastChecked = children[i];
            }
        }

        if (lastChecked) {
            container.insertBefore(bikeCard, lastChecked.nextSibling);
        } else {
            container.appendChild(bikeCard); // No checked items — move to bottom
        }
    }
}

function modalShow(index) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('modalClose');    
    const scale = document.getElementById(`scale${index}`);
    const bikeFrame = document.getElementById(`bike-frame${index}`);
    if (scale && bikeFrame) {
        scale.addEventListener('click', () => {
            modalImg.src = bikeFrame.src;
            modal.style.display = 'flex';
        });
    }
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

window.onload = () => {
    displayBikes();
};

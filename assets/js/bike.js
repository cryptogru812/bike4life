const bikeCrad = document.getElementById("bike-card");
const priceBox = document.getElementById("price-box");
const titan = document.getElementById("titan");
const bsa = document.getElementById("bsa");
const zoll = document.getElementById("zoll");
const tools = document.getElementById("tools");

const bikes = [
    { id: 1, image: './includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 2000 },
    { id: 2, image: './includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3500 },
    { id: 3, image: './includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 9000 },
    { id: 4, image: './includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 8000 },
    { id: 5, image: './includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7500 },
    { id: 6, image: './includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 3200 },
    { id: 7, image: './includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3800 },
    { id: 8, image: './includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 3400 },
    { id: 9, image: './includes/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!', price: 7300 },
    { id: 10, image: './includes/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking', price: 6000 },
    { id: 11, image: './includes/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 5400 },
    { id: 12, image: './includes/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities', price: 4700 },
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

const displayBikes  = () => {   
    
    const filteredBikes = filterBikesByPrice();

    bikeCrad.innerHTML = "";
    priceBox.innerHTML = "";
    titan.innerHTML = ""
    bsa.innerHTML = "";
    zoll.innerHTML = "";
    tools.innerHTML = "";
    filteredBikes.forEach((bike) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bike-card">
            <div class="bike-header">
                <img src="./assets/image/logo.png" alt="Falkenjagd Logo" class="logo">
                <span class="brand-name">Falkenjagd</span>
            </div>
            <div class="bike-image">
                <img src="${bike.image}" alt="Aristos T Bike">
            </div>

            <div class="bike-footer">
                <div class="bike-info">
                <h3>${bike.title}</h3>
                <p><em>${bike.slogan}</em></p>
                </div>
                <div class="compare">
                <input type="checkbox" id="compare${bike.id}">
                <label for="compare${bike.id}">Compare</label>
                </div>
            </div>
        </div>
      `;
      bikeCrad.appendChild(div);
    });
    filteredBikes.forEach(() => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="price-box">
            <div class="price">3.499,00€</div>
            <button class="explore-btn">Explore</button>
            <div class="divider"></div>
            <div class="price">1.890,00€</div>
            <button class="explore-btn">Explore</button>
            <div class="divider"></div>
            <ul class="features">
                <li class="positive"><span>+</span> Excellent price-performance ratio</li>
                <li class="positive"><span>+</span> Minimalistically displays everything that is required</li>
                <li class="negative"><span>–</span> No complete cable integration possible</li>
            </ul>
        </div>
      `;
      priceBox.appendChild(div);
    });
    filteredBikes.forEach(() => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="icon">
                <img src="./assets/image/bike-frame-icon.svg" alt="Bike Frame" />
            </div>
            <div class="label">Titan 3/2,5</div>
            <div class="divider"></div>
            <div class="bar-container">
                <div class="bar-comfortable"></div>
                <div class="bar-sporty"></div>
            </div>
            <div class="bar-labels">
                <span>Comfortable</span>
                <span>Sporty</span>
            </div>

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
        </div>
      `;
      titan.appendChild(div);
    });
    filteredBikes.forEach(() => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="bsa">
                <img src="./assets/image/bsa.svg" alt="BSA" />
            </div>
            <div class="label">BSA</div>
            <div class="divider"></div>
            <div class="label">Chain , single and double</div>
            <div class="divider"></div>
            <div class="label">10 - 48</div>
        </div>
      `;
      bsa.appendChild(div);
    });
    filteredBikes.forEach(() => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="zoll">
                <img src="./assets/image/zoll.svg" alt="zoll" />
            </div>
            <div class="label">28 Zoll</div>
            <div class="divider"></div>
            <div class="label">--</div>
            <div class="divider"></div>
            <div class="label">45mm</div>
            <div class="divider"></div>
            <div class="label">145Kg</div>
        </div>
      `;
      zoll.appendChild(div);
    });
    filteredBikes.forEach(() => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
            <div class="zoll">
                <img src="./assets/image/tools.svg" alt="tools" />
            </div>
            <div class="dot"><div class="cyan"></div></div>
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
        </div>
      `;
      tools.appendChild(div);
    });
    bikeCrad.addEventListener("scroll", () => {
        priceBox.scrollLeft = bikeCrad.scrollLeft;
        titan.scrollLeft = bikeCrad.scrollLeft;
        bsa.scrollLeft = bikeCrad.scrollLeft;
        zoll.scrollLeft = bikeCrad.scrollLeft;
        tools.scrollLeft = bikeCrad.scrollLeft;
    })
};

window.onload = () => {
    displayBikes();
};

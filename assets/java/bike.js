const result = document.getElementById("result");

const getData = () => {
    bikes = [
        { id: 1, image: './assets/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!' },
        { id: 2, image: './assets/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking' },
        { id: 3, image: './assets/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
        { id: 4, image: './assets/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
        { id: 5, image: './assets/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!' },
        { id: 6, image: './assets/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking' },
        { id: 7, image: './assets/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
        { id: 8, image: './assets/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
        { id: 9, image: './assets/image/bike/bike1.svg', title: 'Aristos T', slogan: 'A titan for everyone!' },
        { id: 10, image: './assets/image/bike/bike2.svg', title: 'Aristos GT', slogan: 'For gravel and bikepacking' },
        { id: 11, image: './assets/image/bike/bike3.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
        { id: 12, image: './assets/image/bike/bike4.svg', title: 'Aristos GTR', slogan: 'One wheel - infinite possibilities' },
    ]
    result.innerHTML = "";
    bikes.forEach((bike) => {
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

        <div class="price-box">
            <div class="price">3.499,00€</div>
            <button class="explore-btn">Explore</button>
            <hr>
            <div class="price">1.890,00€</div>
            <button class="explore-btn">Explore</button>
            <hr>
            <ul class="features">
                <li class="positive"><span>+</span> Excellent price-performance ratio</li>
                <li class="positive"><span>+</span> Minimalistically displays everything that is required</li>
                <li class="negative"><span>–</span> No complete cable integration possible</li>
            </ul>
        </div>

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
        result.appendChild(div);
    });
};

getData();

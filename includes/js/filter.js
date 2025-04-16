
function updateSlider() {
    const rangeMin = document.getElementById("range-min");
    const rangeMax = document.getElementById("range-max");
    const minGap = 500;
    const rangeValue = document.getElementById("rangeValue");
    let min = parseInt(rangeMin.value);
    let max = parseInt(rangeMax.value);

    if (max - min <= minGap) {
        if (event.target.id === "range-min") {
            rangeMin.value = max - minGap;
        } else {
            rangeMax.value = min + minGap;
        }
    } else {
        rangeValue.textContent = `${rangeMin.value}€ to ${rangeMax.value}€`;
        fillSlider();

        displayBikes();
    }
}

function fillSlider() {
    const rangeMin = document.getElementById("range-min");
    const rangeMax = document.getElementById("range-max");
    const maxVal = 10000;
    const sliderTrack = document.getElementById("slider-track");
    const percent1 = (rangeMin.value / maxVal) * 100;
    const percent2 = (rangeMax.value / maxVal) * 100;
    sliderTrack.style.left = percent1 + "%";
    sliderTrack.style.width = (percent2 - percent1) + "%";
}


window.onload = () => {
    const rangeMin = document.getElementById("range-min");
    const rangeMax = document.getElementById("range-max");
    rangeMin.addEventListener("input", updateSlider);
    rangeMax.addEventListener("input", updateSlider);
    updateSlider();
};
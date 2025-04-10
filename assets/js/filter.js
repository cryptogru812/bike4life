const rangeMin = document.getElementById("range-min");
const rangeMax = document.getElementById("range-max");
const rangeValue = document.getElementById("rangeValue");
const sliderTrack = document.getElementById("slider-track");
const minGap = 500;
const maxVal = 10000;

function updateSlider() {
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
    }
}

function fillSlider() {
    const percent1 = (rangeMin.value / maxVal) * 100;
    const percent2 = (rangeMax.value / maxVal) * 100;
    sliderTrack.style.left = percent1 + "%";
    sliderTrack.style.width = (percent2 - percent1) + "%";
}

rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);
window.onload = () => {
    updateSlider();
};
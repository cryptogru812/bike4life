function scrollSlider(direction) {
    const slider = document.getElementById('bike-card');
    const pitch = window.innerWidth > 768 ? 200 : 50; 
    const scrollAmount = slider.querySelector('img').offsetWidth + pitch;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

window.addEventListener('load', () => {
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
        if(slider.scrollWidth < window.innerWidth * a) {
            customSlider.style.display = 'none';
        }
        else {
            customSlider.style.display = 'block';
        }
    });

    range2.addEventListener('input', () => {
        const a = window.innerWidth > 768 ? 0.8544 : 0.8;
        if(slider.scrollWidth < window.innerWidth * a) {
            customSlider.style.display = 'none';
        }
        else {
            customSlider.style.display = 'block';
        }
    });
    const a = window.innerWidth > 768 ? 0.8544 : 0.8;
    if(slider.scrollWidth < window.innerWidth * a) {
        customSlider.style.display = 'none';
    }
    else {
        customSlider.style.display = 'block';
    } 
})







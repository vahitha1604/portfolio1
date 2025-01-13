document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const houses = document.querySelectorAll('.home');
    let carPosition = 0;

    // Simulate car movement and reveal houses
    const interval = setInterval(() => {
        carPosition += 5; // Move car 5px to the right
        car.style.transform = `translateX(${carPosition}px)`;

        houses.forEach((house, index) => {
            const housePosition = parseInt(house.style.left);
            if (carPosition > housePosition - 50) {
                house.classList.add('visible'); // Make house visible
            }
        });

        if (carPosition > 1000) clearInterval(interval); // Stop at some point
    }, 100);
});

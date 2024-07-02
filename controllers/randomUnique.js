let selectedRestaurants = [];

document.getElementById("generateButton").addEventListener("click", function() {
    function getRandomRestaurant(restaurants) {
        const availableRestaurants = restaurants.filter(restaurant => !selectedRestaurants.includes(restaurant));

        if (availableRestaurants.length === 0) {
            selectedRestaurants = [];
            Swal.fire({
                title: 'All restaurants have been selected!',
                text: 'Starting over...',
                icon: 'info',
                confirmButtonText: 'OK',
                position: 'center'
            });
            return getRandomRestaurant(restaurants);
        }

        const randomIndex = Math.floor(Math.random() * availableRestaurants.length);

        const randomRestaurant = availableRestaurants[randomIndex];

        selectedRestaurants.push(randomRestaurant);

        return randomRestaurant;
    }

    fetch('config/restaurants.json')
        .then(response => response.json())
        .then(restaurants => {
            const randomRestaurant = getRandomRestaurant(restaurants);
            Swal.fire({
                title: 'มึงควรไปแดก',
                text: randomRestaurant,
                iconHtml: '<iframe src="./views/unt/index.html" height="150" width="300"></iframe>',
                confirmButtonText: 'OK'
            });
        })
        .catch(error => console.error('Error loading restaurants:', error));
});

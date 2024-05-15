document.getElementById("generateButton").addEventListener("click", function() {
    function getRandomRestaurant(restaurants) {
        const randomIndex = Math.floor(Math.random(Math.seedrandom(Math.seedrandom())) * restaurants.length);
        return restaurants[randomIndex];
    }

    fetch('config/restaurants.json')
        .then(response => response.json())
        .then(restaurants => {
            const randomRestaurant = getRandomRestaurant(restaurants);
            Swal.fire({
                title: 'มึงควรไปแดก',
                text: randomRestaurant,
                // icon: 'info',
                // iconHtml: '<iframe src="./views/unt/index.html" height="150" width="300"></iframe>',
                iconHtml: '<embed type="text/html" src="./views/unt/index.html" height="150" width="300">',
                confirmButtonText: 'OK'
            });
        })
        .catch(error => console.error('Error loading restaurants:', error));
});

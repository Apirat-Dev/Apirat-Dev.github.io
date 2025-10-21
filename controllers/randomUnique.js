let selectedRestaurants = [];
let count = 0;
let randNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

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
            count++;
            if(count === 2 && randNumber === 2){
                Swal.fire({
                    title: "<h1>" + 'เห้ยย!!' + "</h1>",
                    html: `<span>มึงอย่าโกงดิวะ!!</span>`,
                    iconHtml: '<iframe src="./views/unt/index.html" height="150" width="300"></iframe>',
                    confirmButtonText: 'OK'
                });
                count = 0;
                randNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
            }
            else if(count === randNumber){
                Swal.fire({
                    title: "<h1 style='color:red; text-shadow: 0 0 2px #a11111ff, 0 0 25px #660000;'>" + 'มึงโกงกูละไอ้สัสสส!!' + "</h1>",
                    html: `<span style="color: red; text-shadow: 0 0 2px #a11111ff, 0 0 20px #660000;">จะจิ้มซ้ำทำเหี้ยอะไร ${randNumber - 1} - ${randNumber} รอบ!!</span>`,
                    iconHtml: '<iframe src="./views/unt/index.html" height="150" width="300"></iframe>',
                    confirmButtonText: 'OK'
                });
                count = 0;
                randNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
            }
            else{
                Swal.fire({
                    title: 'มึงควรไปแดก',
                    text: randomRestaurant,
                    iconHtml: '<iframe src="./views/unt/index.html" height="150" width="300"></iframe>',
                    confirmButtonText: 'OK'
                });
            }
        })
        .catch(error => console.error('Error loading restaurants:', error));
});

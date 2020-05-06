// 4. In your JavaScript file, write a fetch call that fetches the data from your json-server.
fetch("http://localhost:8088/restaurants")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        console.table(parsedRestaurants)
    });

// 5. Print the name of each restaurant to the DOM

fetch("http://localhost:8088/restaurants")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants =>{
       
        parsedRestaurants.forEach(restaurant => {
           //Print restaurants to DOM
           console.log(parsedRestaurants[0])
           document.querySelector("#restaurantNameContainer").innerHTML += `<h4>${restaurant.restaurant.name}</h4>`
        })
    });
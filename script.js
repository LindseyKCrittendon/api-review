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
           document.querySelector("#restaurantNameContainer").innerHTML += 
           `<a href="${restaurant.restaurant.url}" target="_blank"><h4>${restaurant.restaurant.name}</h4></a>
           <p>${restaurant.restaurant.location.address}</p>
           <p>Rating ${restaurant.restaurant.user_rating.aggregate_rating}</p>
           <p>Average cost for two $${restaurant.restaurant.average_cost_for_two}</p>
           <a href="${restaurant.restaurant.menu_url}" target="_blank"><button>View Menu</button></a>`;
        console.log(restaurant.restaurant.average_cost_for_two)
        })
    });

//     UI/ UX enhancements before you go on to stretch goals:
// Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
//done

// Make each restaurant's name a hyperlink to their website


// Style each restaurant as a card, and add a card to each button that says "View Menu". This button should be a hyperlink to the restaurant's menu.
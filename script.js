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
           `<h4>${restaurant.restaurant.name}</h4>
           <p>${restaurant.restaurant.location.address}</p>`
        console.log(restaurant.restaurant.location.address)
        })
    });

//     UI/ UX enhancements before you go on to stretch goals:
// Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
// Make each restaurant's name a hyperlink to their website
// Style each restaurant as a card, and add a card to each button that says "View Menu". This button should be a hyperlink to the restaurant's menu.
let kebabPic = "./pics/kebab.jpg";

var video = document.getElementById('autoplayVideo');
        video.autoplay = true;
        video.muted = true; // Autoplay typically requires muting
        video.load();

        video.addEventListener('ended', function() {
            video.currentTime = 0;
            video.play();
        });


        var video2 = document.getElementById('autoplayVideo2');
        video2.autoplay = true;
        video2.muted = true; // Autoplay typically requires muting
        video2.load();


        video2.addEventListener('ended', function() {
            video2.currentTime = 0;
            video2.play();
        });

        var video3 = document.getElementById('autoplayVideo3');
        video3.autoplay = true;
        video3.muted = true; // Autoplay typically requires muting
        video3.load();

        video3.addEventListener('ended', function() {
            video3.currentTime = 0;
            video3.play();
        });

// loading page

document.addEventListener("DOMContentLoaded", function () {
    const loadingPage = document.querySelector('.loading-page');
    const loadingProgressElement = document.getElementById("loadingProgress");
    let loadingProgress = 0;
    const targetProgress = 100; // Set the target progress (100%) for the loading

    function simulateLoading() {
        if (loadingProgress < targetProgress) {
            loadingProgress += (targetProgress / 100) * 1; // Simulate progress increase (slower)
            loadingProgress = Math.min(loadingProgress, targetProgress);
            loadingProgressElement.textContent = `${Math.round(loadingProgress)}%`;
            requestAnimationFrame(simulateLoading);
        }

        if (loadingProgress >= targetProgress) {
            loadingPage.classList.add('hidden'); // Hide the loading page with a transition
        }
    }

    simulateLoading();
});

// cards adress

const data = [
    {
      name: 'Weston Kebab Brs',
      address: '123 Main St',
      location: 'Bristol',
    },
    {
      name: 'WSM Kebab',
      address: '456 Elm Ave',
      location: 'WSM',
    },
    {
      name: 'Taunton meat',
      address: '789 Oak Rd',
      location: 'Taunton',
    },
    {
      name: 'Bath Kebs',
      address: '101 Pine Ln',
      location: 'Bath',
    },
  ];
  
  const cardContainer = document.getElementById('cardContainer');
  
  data.forEach(person => {
    const card = document.createElement('div');
    card.className = 'card';
  
    const nameElement = document.createElement('h2');
    nameElement.textContent = person.name;
  
    const addressElement = document.createElement('p');
    addressElement.textContent = `Address: ${person.address}`;
  
    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${person.location}`;
  
    card.appendChild(nameElement);
    card.appendChild(addressElement);
    card.appendChild(locationElement);
  
    cardContainer.appendChild(card);
  });
  

  // rows data 

  // Function to update the restaurant information dynamically
function updateRestaurantInfo() {
    const restaurantInfo = document.getElementById("restaurantInfo");
    const restaurantMenu = document.getElementById("restaurantMenu");

    // Simulated dynamic content
    const aboutUs = `
        <h3>Discover the new taste of Weston Kebab!</h3>
        <p>Welcome to Weston Super Kebab, your neighborhood kebab haven that has been delighting taste buds for two wonderful decades. As a family-owned establishment, we take immense pride in bringing the authentic flavors of the Mediterranean to the heart of Weston.</p>
            
            <p>Our journey began 20 years ago with a simple yet ambitious goal: to serve the finest kebabs that pay homage to age-old recipes and techniques. Over the years, we've perfected our craft, ensuring that every bite you take is a symphony of exquisite tastes and textures.</p>
            
           
            
           
    `;

    const menuContent = `
    
        <h2>OUR MENU</h2><br><br>
        <h3>Kebabs</h3>
        <p><strong>Lamb Kebab - £8.99</strong><br>
            Grilled marinated lamb served with pita bread, lettuce, tomatoes, onions, and your choice of sauce.</p>
        <p><strong>Chicken Kebab - £7.99</strong><br>
            Juicy grilled chicken served with pita bread, lettuce, cucumbers, onions, and your choice of sauce.</p>
        <p><strong>Beef Kebab - £9.49</strong><br>
            Tender grilled beef served with pita bread, mixed greens, bell peppers, and your choice of sauce.</p>
        <p><strong>Vegetarian Kebab - £6.99</strong><br>
            Grilled veggies (zucchini, bell peppers, mushrooms, onions) served with pita bread, lettuce, tomatoes, and your choice of sauce.</p>
        <p><strong>Falafel Wrap - £5.49</strong><br>
            Homemade falafel balls wrapped in pita bread with hummus, lettuce, tomatoes, and tahini sauce.</p>

        <h3>Sides</h3>
        <p>French Fries - £2.49</p>
        <p>Onion Rings - £2.99</p>
        <p>Garlic Knots - £3.29</p>
        <p>Hummus with Pita Bread - £4.49</p>
        <p>Greek Salad - £5.99</p>
        <p>Tabouli Salad - £4.99</p>

        <h3>Beverages</h3>
        <p>Soft Drinks (Coke, Pepsi, Sprite) - £1.99</p>
        <p>Fresh Fruit Juices (Orange, Apple, Mango) - £2.49</p>
        <p>Bottled Water - £1.29</p>
        <p>Iced Tea - £1.99</p>
        <p>Coffee - £2.29</p>

        <h3>Specials</h3>
        <p><strong>Kebab Platter - £12.99</strong><br>
            A combination of your choice of kebab, served with rice, salad, pita bread, and choice of sauce.</p>
        <p><strong>Family Feast - £28.99</strong><br>
            Perfect for sharing! A variety of kebabs, sides, and drinks to satisfy the whole family.</p>

        <h3>Desserts</h3>
        <p>Baklava - £3.99</p>
        <p>Turkish Delight - £2.99</p>
        <p>Rice Pudding - £3.49</p>
        <p>Chocolate Brownie - £3.49</p>

        <h3>Kids Menu</h3>
        <p>Kids Chicken Kebab - £5.99</p>
        <p>Kids Beef Kebab - £6.49</p>
        <p>Kids Cheese Quesadilla - £4.99</p>

  
 `;

    // Update the content
    restaurantInfo.innerHTML = aboutUs;
    restaurantMenu.innerHTML = menuContent;
}

// Call the function to update the content dynamically
updateRestaurantInfo();

//read more expander

const expanders = document.querySelectorAll('.expander');
const readMoreButtons = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (expanders[index].style.display === 'none') {
            expanders[index].style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            expanders[index].style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});


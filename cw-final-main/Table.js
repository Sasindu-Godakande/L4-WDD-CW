const cityData = {
    Copenhagen: {
        greenSpace: 20,
        wasteEfficiency: 87,
        airQuality: "Good",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "Smart traffic lights, green rooftops"
    },
    Singapore: {
        greenSpace: 47,
        wasteEfficiency: 90,
        airQuality: "Moderate",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "Autonomous buses, AI water management"
    },
    Amsterdam: {
        greenSpace: 35,
        wasteEfficiency: 85,
        airQuality: "Good",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "IoT bike tracking, smart energy grids"
    },
    Tokyo: {
        greenSpace: 20,
        wasteEfficiency: 92,
        airQuality: "Moderate",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "AI-powered waste sorting, earthquake detection"
    },
    Stockholm: {
        greenSpace: 30,
        wasteEfficiency: 95,
        airQuality: "Good",
        co2Reduction: "High CO₂ 🔴🔴🔴",
        tech: "Smart heating, underground waste collection"
    },
    Vancouver: {
        greenSpace: 55,
        wasteEfficiency: 80,
        airQuality: "Excellent",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "Smart grids, electric ferries"
    },
    Barcelona: {
        greenSpace: 10,
        wasteEfficiency: 90,
        airQuality: "Moderate",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "IoT street lighting, smart parking"
    },
    Zurich: {
        greenSpace: 60,
        wasteEfficiency: 98,
        airQuality: "Excellent",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "Smart transportation, AI city planning"
    },
    Berlin: {
        greenSpace: 35,
        wasteEfficiency: 93,
        airQuality: "Good",
        co2Reduction: "Moderate CO₂ 🟠🟠",
        tech: "AI-powered waste sorting, renewable energy monitoring"
    }
};

const dropdownTrigger = document.getElementById('city-dropdown-trigger');
const cityDropdown = document.getElementById('city-dropdown');
const tableBody = document.querySelector('tbody');

dropdownTrigger.addEventListener('click', () => {
    // Calculate and set dropdown position
    const rect = dropdownTrigger.getBoundingClientRect();
    cityDropdown.style.top = rect.bottom + 'px';
    cityDropdown.style.left = rect.left + 'px';

    cityDropdown.style.display = cityDropdown.style.display === 'none' ? 'block' : 'none';

    // Attach event listeners *after* the dropdown is shown
    cityDropdown.querySelectorAll('input[name="city"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedCities = Array.from(cityDropdown.querySelectorAll('input[name="city"]:checked')).map(checkbox => checkbox.value);
            tableBody.innerHTML = ''; // Clear existing rows

            selectedCities.forEach(city => {
                const data = cityData[city];
                if (data) {
                    const row = tableBody.insertRow();
                    row.insertCell().textContent = city;

                    // Add image to Green Space column
                    const imageCell = row.insertCell();
                    const image = document.createElement('img');

                    // Set the image source based on the city name
                    image.src = `Images/${city}.png`;
                    image.alt = `${city} Green Space`;

                    image.style.width = '100px';
                    image.style.height = '100px';
                    image.style.display = 'block';
                    image.style.margin = '0 auto';

                    imageCell.appendChild(image);

                    const transportCell = row.insertCell();
                    const transportImage = document.createElement('img');

                    transportImage.src = `icons/${city}.png`; // Or use city-specific image paths
                    transportImage.alt = `${city} Public Transport`;

                    transportImage.style.width = '100px';
                    transportImage.style.height = '100px';
                    transportImage.style.display = 'block';
                    transportImage.style.margin = '0 auto';

                    transportCell.appendChild(transportImage);

                    const energyCell = row.insertCell();
                    const energyImage = document.createElement('img');

                    energyImage.src = `icons/${city}-energy.png`; // Or use city-specific image paths
                    energyImage.alt = `${city} Energy Usage`;

                    energyImage.style.width = '100px';
                    energyImage.style.height = '100px';
                    energyImage.style.display = 'block';
                    energyImage.style.margin = '0 auto';

                    energyCell.appendChild(energyImage);

                    row.insertCell().textContent = data.airQuality;
                    row.insertCell().textContent = data.wasteEfficiency + "%";
                    row.insertCell().textContent = data.co2Reduction;
                    row.insertCell().textContent = data.tech;

                    // Change thermometer color based on air quality (only in Air Quality column)
                    const airQualityCell = row.cells[4]; // Get the Air Quality cell
                    airQualityCell.classList.add(`air-quality-${row.rowIndex}`); // Add a unique class

                    // Select the pseudo element
                    const pseudoElement = window.getComputedStyle(airQualityCell, '::before');

                    // Create a new style element for each row
                    const style = document.createElement('style');
                    document.head.appendChild(style);

                    if (data.airQuality === "Moderate") {
                        style.sheet.insertRule(`.air-quality-${row.rowIndex}::before { color: orange; }`);
                    } else if (data.airQuality === "Good") {
                        style.sheet.insertRule(`.air-quality-${row.rowIndex}::before { color: green; }`);
                    } else {
                        style.sheet.insertRule(`.air-quality-${row.rowIndex}::before { color: black; }`);
                    }
                }
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (!cityDropdown.contains(event.target) && event.target !== dropdownTrigger) {
            cityDropdown.style.display = 'none';
        }
    });
});


        document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector('.hamburger-button');
        const navLinks = document.querySelector('.nav-links');
        const searchBox = document.querySelector('.search-box');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", function() {
                hamburger.classList.toggle("active");
                navLinks.classList.toggle("active");
                searchBox.classList.toggle("active");
            });
        }
    
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && 
                !navLinks.contains(event.target) && 
                !searchBox.contains(event.target)) {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
                searchBox.classList.remove("active");
          }   
       });
        });
    
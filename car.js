// information of the
class ToyCar {
    constructor(model, color, scale, material, price, weight, dimensions, manufacturer, ageRecommendation, features, stockQuantity, isLimitedEdition, releaseDate, batteryOperated, category) {
        this.model = model;
        this.color = color;
        this.scale = scale;
        this.material = material;
        this.price = price;
        this.weight = weight;
        this.dimensions = dimensions;  // Example: { length: 10, width: 4, height: 3 }
        this.manufacturer = manufacturer;
        this.ageRecommendation = ageRecommendation;
        this.features = features;      // Example: ["Pull-back action", "Die-cast body"]
        this.stockQuantity = stockQuantity;
        this.isLimitedEdition = isLimitedEdition;
        this.releaseDate = releaseDate;
        this.batteryOperated = batteryOperated;
        this.category = category;
    }

    displayInfo() {
        return `${this.model} by ${this.manufacturer}: $${this.price}. ${this.features.join(", ")}`;
    }

    toggleLimitedEdition() {
        this.isLimitedEdition = !this.isLimitedEdition;
    }

    updateStock(newStock) {
        this.stockQuantity = newStock;
    }
}


// Create a toy car instance
const myToyCar = new ToyCar(
    "FJ40",
    "Red",
    "1:24",
    "Die-cast Metal with some plastic parts",
    19.99,
    "150g",
    { length: 6.5, width: 2.75, height: 3 },
    "Motor Max",
    "3+",
    ["Openable hood", "Opening doors"],
    100,
    false,
    "2023-09-15",
    false,
    "SUV"
);

// Display toy car info
function displayCarInfo() {
    const carInfo = document.getElementById("car-info");
    carInfo.innerHTML = `
        <p>Model: ${myToyCar.model}</p>
        <p>Color: ${myToyCar.color}</p>
        <p>Scale: ${myToyCar.scale}</p>
        <p>Material: ${myToyCar.material}</p>
        <p>Price: $${myToyCar.price}</p>
        <p>Weight: ${myToyCar.weight}</p>
        <p>Dimensions: ${myToyCar.dimensions.length} x ${myToyCar.dimensions.width} x ${myToyCar.dimensions.height} cm</p>
        <p>Manufacturer: ${myToyCar.manufacturer}</p>
        <p>Age Recommendation: ${myToyCar.ageRecommendation}</p>
        <p>Features: ${myToyCar.features.join(", ")}</p>
        <p>Stock Quantity: ${myToyCar.stockQuantity}</p>
        <p>Limited Edition: ${myToyCar.isLimitedEdition ? "Yes" : "No"}</p>
        <p>Release Date: ${myToyCar.releaseDate}</p>
        <p>Battery Operated: ${myToyCar.batteryOperated ? "Yes" : "No"}</p>
        <p>Category: ${myToyCar.category}</p>
    `;
}

// Toggle limited edition status
function toggleLimitedEdition() {
    myToyCar.toggleLimitedEdition();
    displayCarInfo();
}

// Update stock quantity
function updateStockPrompt() {
    const newStock = prompt("Enter the new stock quantity:");
    if (newStock !== null) {
        myToyCar.updateStock(parseInt(newStock));
        displayCarInfo();
    }
}


class IceCream {
    constructor(flavor, price, quantity) {
        this.flavor = flavor;
        this.price = price;
        this.quantity = quantity;
    }
}

class IceCreamShop {
    constructor() {
        this.inventory = []; 
    }


    addIceCream(flavor, price, quantity) {
        const newIceCream = new IceCream(flavor, price, quantity);
        this.inventory.push(newIceCream);
        console.log(`${flavor} added to the inventory.`);
    }

    
    updateIceCream(flavor, newPrice, newQuantity) {
        const iceCream = this.inventory.find(item => item.flavor === flavor);
        if (iceCream) {
            iceCream.price = newPrice;
            iceCream.quantity = newQuantity;
            console.log(`${flavor} has been updated.`);
        } else {
            console.log(`Ice cream flavor ${flavor} not found in the inventory.`);
        }
    }

    
    calculateTotalValue() {
        let totalValue = 0;
        for (let iceCream of this.inventory) {
            totalValue += iceCream.price * iceCream.quantity;
        }
        return totalValue;
    }


    displayInventory() {
        console.log("Ice Cream Inventory:");
        this.inventory.forEach(iceCream => {
            console.log(`Flavor: ${iceCream.flavor}, Price: ₹${iceCream.price}, Quantity: ${iceCream.quantity}`);
        });
    }
}


const shop = new IceCreamShop();


shop.addIceCream("Vanilla", 50, 10);
shop.addIceCream("Chocolate", 60, 5);
shop.addIceCream("Strawberry", 55, 8);

shop.displayInventory();


shop.updateIceCream("Chocolate", 65, 6);


const totalValue = shop.calculateTotalValue();
console.log(`Total value of ice cream in inventory: ₹${totalValue}`);


shop.displayInventory();


// Output:
// Vanilla added to the inventory.
// Chocolate added to the inventory.
// Strawberry added to the inventory.
// Ice Cream Inventory:
// Flavor: Vanilla, Price: ₹50, Quantity: 10  
// Flavor: Chocolate, Price: ₹60, Quantity: 5 
// Flavor: Strawberry, Price: ₹55, Quantity: 8
// Chocolate has been updated.
// Total value of ice cream in inventory: ₹1330
// Ice Cream Inventory:
// Flavor: Vanilla, Price: ₹50, Quantity: 10 
// Flavor: Chocolate, Price: ₹65, Quantity: 6
// Flavor: Strawberry, Price: ₹55, Quantity: 8

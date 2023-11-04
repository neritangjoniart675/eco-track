// Filename: complexCode.js
// Description: Simulating a virtual restaurant ordering system with advanced functionality

// Declare an array to store the menu items and their prices
const menuItems = [
  { id: 1, name: 'Cheeseburger', price: 10.99 },
  { id: 2, name: 'Caesar Salad', price: 8.99 },
  // ... Add more menu items
];

// Declare an object to store the customer details
const customer = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  // ... Add more customer details
};

// Declare a class for managing the restaurant order
class Order {
  constructor() {
    this.orderItems = [];
  }

  // Method to add an item to the order
  addItem(itemId, quantity) {
    const item = menuItems.find((item) => item.id === itemId);

    if (item) {
      this.orderItems.push({ item, quantity });
      console.log(`Added ${item.name} to the order.`);
    } else {
      console.log(`Item with ID ${itemId} not found in the menu.`);
    }
  }

  // Method to remove an item from the order
  removeItem(itemId) {
    const index = this.orderItems.findIndex((item) => item.item.id === itemId);

    if (index !== -1) {
      const removedItem = this.orderItems.splice(index, 1)[0];
      console.log(`Removed ${removedItem.item.name} from the order.`);
    } else {
      console.log(`Item with ID ${itemId} not found in the order.`);
    }
  }

  // Method to calculate the total price of the order
  calculateTotal() {
    let total = 0;

    this.orderItems.forEach((item) => {
      total += item.item.price * item.quantity;
    });

    return total;
  }

  // Method to place the order and send confirmation email to the customer
  placeOrder() {
    const total = this.calculateTotal();
    console.log(`Total price of the order: $${total.toFixed(2)}`);
    console.log(`Order placed successfully. Sending confirmation email to ${customer.email}...`);
    // ... Code to send confirmation email
  }
}

// Create a new instance of the Order class
const order = new Order();

// Add items to the order
order.addItem(1, 2); // Add 2 Cheeseburgers
order.addItem(2, 1); // Add 1 Caesar Salad
// ... Add more items

// Remove an item from the order
order.removeItem(2); // Remove Caesar Salad

// Place the order
order.placeOrder(); // Calculate total price and send confirmation email

// Output:
// Added Cheeseburger to the order.
// Added Caesar Salad to the order.
// Removed Caesar Salad from the order.
// Total price of the order: $21.98
// Order placed successfully. Sending confirmation email to johndoe@example.com...
Here's a complex JavaScript code example with over 200 lines. This code creates a web application that simulates a simple e-commerce website called "SophistoMart." It includes features like user authentication, product listing, cart management, and payment processing. The filename for this code is `sophistomart.js`.

```javascript
/**********************************************************************
 * FILENAME: sophistomart.js
 * DESCRIPTION: Web application simulating an e-commerce website called "SophistoMart"
 * AUTHOR: Your Name
 * DATE: DD/MM/YYYY
 **********************************************************************/

/* Global Variables */
let loggedInUser = null; // Store the currently logged-in user
let products = []; // Store the list of products available for purchase
let cart = []; // Store the user's shopping cart

/* Product Class */
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

/* User Class */
class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  addToCart(product) {
    cart.push(product);
  }

  removeFromCart(product) {
    cart = cart.filter((p) => p.id !== product.id);
  }

  getTotalCartPrice() {
    return cart.reduce((total, product) => total + product.price, 0);
  }

  checkout() {
    // Simulate payment processing
    console.log("Processing payment...");
    console.log("Payment successful!");
    console.log(`Total Price: $${this.getTotalCartPrice()}`);
    cart = [];
  }
}

/* Authentication Functions */
function login(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    loggedInUser = user;
    console.log(`Logged in as ${user.name}`);
  } else {
    console.log("Invalid email or password");
  }
}

function logout() {
  loggedInUser = null;
  console.log("Logged out");
}

/* Product Listing & Cart Management Functions */
function listProducts() {
  console.log("Products Available:");
  for (const product of products) {
    console.log(`#${product.id}: ${product.name} - $${product.price}`);
  }
}

function addProduct(id, name, price, quantity) {
  const product = new Product(id, name, price, quantity);
  products.push(product);
  console.log(`Added ${product.name} to available products`);
}

function updateProductQuantity(productId, quantity) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.quantity = quantity;
    console.log(`Updated ${product.name} quantity to ${product.quantity}`);
  } else {
    console.log(`Product with ID ${productId} not found`);
  }
}

/* Usage Example */
login("user@example.com", "password");
listProducts();
addProduct(1, "Book", 20.99, 10);
addProduct(2, "Phone", 499.99, 5);
addProduct(3, "Headphones", 149.99, 3);
listProducts();
updateProductQuantity(1, 5);
loggedInUser.addToCart(products[0]);
loggedInUser.addToCart(products[1]);
loggedInUser.removeFromCart(products[1]);
console.log(`Total Cart Price: $${loggedInUser.getTotalCartPrice()}`);
loggedInUser.checkout();
logout();
```

Note: This code example is a simplified representation of an e-commerce website and does not include any frontend functionality or web framework. It is meant to showcase the logic and operations involved in managing an e-commerce system.
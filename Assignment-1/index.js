//array that holds the items in shopping cart 

let shoppingCart = [];

// now i will use fuction to add items to the shopping cart 

function addItemToCart(itemName, itemPrice, quantity) {  //taking 3 parameters name, price, and quantity of the item 
        let item ={                                                  
        name: itemName,                                // the name of the item to be added
        price: itemPrice,                             // the price per unit of the item 
        quantity: quantity,                           // the number of units of the item being added

    };
    shoppingCart.push(item);                         // the created item object  is pushed into the shopping cart array 
    console.log(`${itemName}added to cart.`);  // message is logged  to the console indicating that the item has been successfully added to the cart
}

//will use function  to remove an item from the shopping cart by name 

function removeItemFromCart(itemName) {                                // its takes one parameter itemName name of the item will remove 
    shoppingCart = shoppingCart.filter(item => item.name !== itemName);   //filter() method to create a new array that only contains items 
    console.log(`${itemName} removed from the cart.`);         // new array back to shopping cart  variable the specific item will removed from the cart
}

// fuction that update the quantity of item in the cart

function updateItemQuantity(itemName, newQuantity) {                         // two parameters item name and quantity
    shoppingCart.forEach(item => {                                          // it iterates over the shoppingcart array using forEach
        if (item.name === itemName){                                        // if the name of the item matches the provided item name 
            item.quantity = newQuantity;                                     
            console.log(`Quantity of ${itemName} updated to ${newQuantity}.`);  // the quantity of that item will update to the value. of new Quantity 

        }
    });   
}


//now the fuction to calculate the total cost of items in the cart

function calculateTotalCost() {                       
    let total = 0;                           // it initialize a total variable with a value of 0
    shoppingCart.forEach(item =>{            //the function iterates over the shopping cart array using for each
        total += item.price * item.quantity; // for each item it multiply the price of the item by its quantity and add the result to total

    });
    return total;                           // after iterating throuhout all the items it return the fnal value of total 
    
}

// now using the last funtion to display the items in the cart

function displayCart() {
    console.log("Shopping Cart:");                               // it starts by logging " shopping cart " to the console
    shoppingCart.forEach(item =>{                              // then it iterates over the shopping cart array using for each 
        console.log(`${item.name} - $${item.price} x ${item.quantity}`);  // and log each item name  price and quantity 
        
    });
    console.log(`Total Cost: $${calculateTotalCost()}`); // after listing all item it calls the calculate totalcost function to compute the total cost 
    
}

//Example 

addItemToCart('Apple',1.5, 3);      //adding 3 apples  each apple price 1.5$
addItemToCart('Banana',0.5, 6);     //adding 6 banana  each banana price is 0.5$
addItemToCart('pineapple',2, 3);     //adding 3 pineapple  each pineapple price is 2$
addItemToCart('shampoo',5, 2);     //adding 2 shampoo  each shampoo price is 5$
addItemToCart('soap',3, 4);     //adding 4 soap  each soap price is 3$
addItemToCart('watch',8, 2);     //adding 2 watch  each watch price is 8$
displayCart();                      //Display cart and total

 updateItemQuantity('Apple',5);        //updating the quantity of apple to 5 
 updateItemQuantity('watch',4);        //updating the quantity of watch to 4 
 updateItemQuantity('shampoo',5);        //updating the quantity of shampoo to 5 
 displayCart();                        // display updated cart and total

removeItemFromCart('Banana');         // remove banana from the cart
removeItemFromCart('soap');         // remove soap from the cart
removeItemFromCart('pineapple');         // remove pineapple from the cart
 displayCart();                     // display final and total 
    
    
    

    



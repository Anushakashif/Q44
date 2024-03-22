"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
// have one parameter that collects as many items as the function call providers, and it should print a summary of the 
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time 
function sandwich_order(...items) {
    console.log("Your order:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log("--------------------------");
}
sandwich_order("olives", "Cheese", "iceberg lettece", "Tomato");
sandwich_order("sausage", "cheese");
sandwich_order();

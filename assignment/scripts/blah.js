console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function isFull() {
    console.log('**using isFull function**');
    if(basket.length < maxItems) {
        return false; 
    } 
return true;
}
addItem('Cheese');
addItem('Eggs');
addItem('Ice Cream');
addItem('Tomatoes');
addItem('Bread');

console.log('The number of items in the basket is: ', basket.length);
let theResult = isFull();
console.log('Is the basket full?', theResult);

function addItem(item) {
    if(isFull() === true) {
        console.log('Sorry! The basket is full.')
        return false
    } else {
    basket.push(item);
    if(basket[basket.length -1] === item) {
        return true;
    }
    }
}


// THE CODE BELOW WORKS. It's my original addItem function. I just commented it
//out so I could try the stretch goal one.... which isn't working >:|
/** function addItem(item) {
    basket.push(item);
    if(basket[basket.length -1] === item) {
        return true;
    }
}
*/

console.log(`Basket is ${basket}`);
console.log('Adding broccoli (expect true):', addItem('Broccoli'));
console.log(`Basket is now ${basket}`);
console.log('Adding cake (expect true):', addItem(' Cake'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true):', addItem(' Grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding muffins (expect true):', addItem(' Muffins'));
console.log(`Basket is now ${basket}`);




//Creating a function listItems

function listItems(item) {
    for(let food of basket) {
        console.log(food);
    }
}
listItems(basket);





function empty() {
    while(basket.length > 0) {
        basket.pop();
    }
    if (basket.length === 0) {
        return true;
    }
}
let otherOutcome = empty(basket);
console.log('Is the basket empty now?', otherOutcome);



//STRETCH GOALS


function removeItem(item) {
   let index = basket.indexOf(item);
   if (index === -1) {
    return null;
   } else {
    let eliminatedItem = basket.splice(index, 1);
    return eliminatedItem;
   }
}
console.log('What is in the basket currently?', basket)
console.log('Adding an item to the cart: ', addItem('Cheese'));
console.log('Adding an item to the cart: ', addItem('Eggs'));
console.log('Adding an item to the cart: ', addItem('Ice Cream'));
console.log('Adding an item to the cart: ', addItem('Tomatoes'));
console.log('Adding an item to the cart: ', addItem('Bread'));
console.log('Adding an item to the cart: ', addItem('Potatoes'));
console.log('What is in the basket currently?', basket);
let updatedCart = removeItem('Bread');
console.log('The item removed from the cart is: ', updatedCart);
console.log('What is in the basket currently?', basket);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

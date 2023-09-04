console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    console.log('*in addItem*');
    basket.push(item);
    if(basket[basket.length -1] === item) {
        return true;
    }
}
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
    console.log('*in listItems*');
    for(let food of basket) {
        console.log(food);
    }
}
listItems(basket);




function empty() {
    console.log('*in empty*');
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

const maxItems = 5;

function isFull() {
    console.log('*in isFull*');
    if(basket.length < maxItems) {
        return false; 
    } 
return true;
}
console.log('The number of items in the basket is: ', basket.length);
let theResult = isFull();
console.log('Is the basket full?', theResult);




addItem('Cheese');
addItem('Eggs');
addItem('Ice Cream');
addItem('Tomatoes');
addItem('Bread');
function removeItem(item) {
    console.log('*in removeItem');
   let index = basket.indexOf(item);
   if (index === -1) {
    return null;
   } else {
    let eliminatedItem = basket.splice(index, 1);
    let stringOfEliminatedItem = eliminatedItem.toString();
    return stringOfEliminatedItem;
   }
}
console.log('What is in the basket currently?', basket)
let updatedBasket = removeItem('Bread');
console.log('The item removed from the basket is: ', updatedBasket);
console.log(basket);














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
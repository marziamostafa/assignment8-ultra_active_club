//use local storage to manage cart data
const addToDb2 = (id) => {
    let shoppingcart = {};

    //get the shopping cart
    const storedcart = localStorage.getItem('shopping-cart');

    if (storedcart) {
        shoppingcart = JSON.parse(storedcart);
    }


    // add quantity
    const quantity = shoppingcart[id];


    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingcart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)

    }
    else {

        shoppingcart[id] = 1;
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingcart))

}

export { addToDb2 }
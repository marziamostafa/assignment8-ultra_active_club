const addToDb = (id, time) => {
    let takenBreak = {};
    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('taken-Break');
    if (storedTime) {
        takenBreak = JSON.parse(storedTime);
    }

    const quantity = localStorage.getItem(time);
    if (quantity) {
        const newQuantity = quantity + 1;
        takenBreak[time] = newQuantity;
    }
    else {
        takenBreak[time] = 1;
    }
    localStorage.setItem('taken-Break', JSON.stringify(takenBreak));
}
// const getStoredTime = () => {
//     let takenBreak = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('taken-Break');
//     if (storedCart) {
//         takenBreak = JSON.parse(storedCart);
//     }
//     return takenBreak;
// }

export default addToDb;
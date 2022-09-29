const addToDb = (id, time) => {
    let takenBreak = {};
    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('taken-Break');

    // console.log(storedTime)
    if (storedTime) {
        takenBreak = JSON.parse(storedTime);
    }
    // console.log(takenBreak)
    // console.log(time, id)
    const quantity = localStorage.getItem(time);
    console.log(quantity)
    if (quantity) {
        const newQuantity = quantity + 1;
        takenBreak[time] = newQuantity;
    }
    else {
        takenBreak[time] = 1;
    }
    localStorage.setItem('taken-Break', JSON.stringify(takenBreak));

}
const getStoredTime = () => {
    let takenBreak = {};
    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('taken-Break');

    console.log(storedTime)
    if (storedTime) {
        takenBreak = JSON.parse(storedTime);
    }
    return takenBreak;
}

export {
    addToDb,
    getStoredTime
}
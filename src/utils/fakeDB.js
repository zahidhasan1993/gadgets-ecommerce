// add to localStorage
const addToDB = (id) =>{
    let shoppingCart = {};

    //check if any id stored before
    const storedCart = localStorage.getItem('shopping-cart');
    // if any id is there parse it
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    
    //add quantity
    let quantity = shoppingCart[id];
    if(quantity){
       let newQuantity = quantity + 1;
       shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1
    }

    // now set localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const getLocalData = () =>{
    let shoppingCart = {};

    //check if any id stored before
    const storedCart = localStorage.getItem('shopping-cart');
    // if any id is there parse it
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart
}


export {addToDB,getLocalData}
import { getLocalData } from "../utils/fakeDB";

const productsAndCartData = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const localStorageData = getLocalData();

    let cart = [];
    for(const id in localStorageData){
        const foundedProducts = products.find(product => product.id === id);

        if(foundedProducts){
            foundedProducts.quantity = localStorageData[id];     
            cart.push(foundedProducts);
        }
        
    }
    return {cart,products}
}

export {productsAndCartData}
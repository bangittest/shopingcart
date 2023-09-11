import {
    ACT_ADD_CART,
    ACT_DECREASE_COUNT,
    ACT_INCREASE_COUNT,
} from "../constrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

/**
 *
 * @param {*} id id can kiem tra
 * @param {*} array mang dung de kiem tra
 * @returns neu tim thay ban ghi thi tra ra index neu khong tra ra -1
 * Author:
 */

const findIndexProduct = (id, array) => {
    const productIndex = array.findIndex((pro) => pro.product_id === id);
    return productIndex;
};

//luu giu lieu len lacal
const saveDataLocal = (array) => {
    localStorage.setItem("carts", JSON.stringify(array));
};

export const listCart = (state = initialState, action) => {
    switch (action.type) {
        case ACT_ADD_CART:
            //vi tri can lay

            const indexProduct = findIndexProduct(action.payload.product_id, state);
            //2kiem tra san pham da ton tai trong gio hang chua
            if (indexProduct !== -1) {
                //1 clone lai mang cu
                const newCarts = [...state];
                newCarts[indexProduct].quantyti += 1;
                //luu len local
                saveDataLocal(newCarts);
                return newCarts;
            } else {
                //neu ton tai thi tang so luong
                // clone lai mang cu
                const newAddCarts = [...state, { ...action.payload, quantyti: 1 }];
                //luu len local
                saveDataLocal(newAddCarts);
                return newAddCarts;
            }

        //neu chua thi them vao gio hang
        //3 luu giu lieu len local
        //4 return ra mang moi

        case ACT_INCREASE_COUNT:
            //clon lai mang cu
            const increaseCart = [...state];
            // lay ra vi tri
            const updateIndex = findIndexProduct(action.payload, increaseCart);
            // cap nhat lai vi tri cua quantyti
            increaseCart[updateIndex].quantity += 1;
            saveDataLocal(increaseCart);
            return increaseCart;

        case ACT_DECREASE_COUNT:
            //clon lai mang cu
            const decreaseCart = [...state];
            // lay ra vi tri
            const updateIndexD = findIndexProduct(action.payload, decreaseCart);
            // cap nhat lai vi tri cua quantyti
            if (decreaseCart[updateIndexD].quantity > 1) {
                decreaseCart[updateIndexD].quantity -= 1;
                saveDataLocal(decreaseCart);
                return decreaseCart;
            } else {
                //loc ra nhung ban ghi co id khac voi id can cap nhat
                const productFiter = decreaseCart.filter(
                    (product) => product.product_id !== action.payload
                );
                saveDataLocal(productFiter);
                return productFiter;
            }

        default:
            break;
    }
    return state;
};

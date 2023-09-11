import { ACT_ADD_CART, ACT_DECREASE_COUNT, ACT_INCREASE_COUNT } from "../constrains/actionTypes";

export const act_add = (product) => {
    return {
        type: ACT_ADD_CART,
        payload: product,
    };
}

export const act_increase = (id) => {
    return {
        type: ACT_INCREASE_COUNT,
        payload: id,
    }
}

export const act_decrease = (id) => {
    return {
        type: ACT_DECREASE_COUNT,
        payload: id,
    }
}
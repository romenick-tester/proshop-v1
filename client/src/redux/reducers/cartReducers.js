import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const cartReducerInitialState = {
    cartItems: []
};

const cartReducer = (state = cartReducerInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ADD_ITEM:
            const item = payload;

            const existItem = state.cartItems.find(x => x.productId === item.productId);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.productId === existItem.productId ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

            return {};

        case CART_REMOVE_ITEM:

            return {};

        default:

            return state;
    }
};

export { cartReducer };
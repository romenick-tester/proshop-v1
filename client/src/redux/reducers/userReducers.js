import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT_REQUEST
} from "../constants/userConstants";

const userInitialState = {
    loading: false,
    auth: null,
    error: null
};

const userReducer = (state = userInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: payload,
                error: null
            };

        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                auth: null,
                error: payload
            };

        default:
            return state;
    }
};

export default userReducer;
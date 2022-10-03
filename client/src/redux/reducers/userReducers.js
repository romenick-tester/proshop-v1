import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
} from "../constants/userConstants";

const userLoginInitialState = {
    loading: false,
    profile: null,
    error: null
};

const userLoginReducer = (state = userLoginInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: payload,
                error: null
            };

        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                profile: null,
                error: payload
            };

        case USER_LOGOUT:
            return userLoginInitialState;

        default:
            return state;
    }
};

const userRegisterInitialState = {
    loading: false,
    profile: null,
    error: null
};

const userRegisterReducer = (state = userRegisterInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_REGISTER_REQUEST:
            return { ...state, loading: true };

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: payload,
                error: null
            };

        case USER_REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                profile: null,
                error: payload
            };

        default:
            return state;
    }
};

export { userLoginReducer, userRegisterReducer };
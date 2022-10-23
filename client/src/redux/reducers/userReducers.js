import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_ERROR,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_ERROR,
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

const userProfileInitialState = {
    loading: false,
    profile: null,
    error: null
};

const userProfileReducer = (state = userProfileInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true };

        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: payload,
                error: null
            };

        case USER_PROFILE_ERROR:
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

const userUpdateProfileReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true };

        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                profile: payload,
                success: true
            };

        case USER_UPDATE_PROFILE_ERROR:
            return {
                loading: false,
                profile: null,
                success: false,
                error: payload
            };

        default:
            return state;
    }
};

export { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdateProfileReducer };
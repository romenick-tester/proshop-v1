import axios from "axios";
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
    USER_UPDATE_PROFILE_ERROR
} from "../constants/userConstants";


const loginUser = ({ email, password }) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });

    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/api/v1/user/auth/login", { email, password }, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userDetails", JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    }
};

const registerUser = ({ name, email, password }) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });

    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post("/api/v1/user/auth/register", { name, email, password }, config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        localStorage.setItem("userDetails", JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: USER_REGISTER_ERROR,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    }
};

const logoutUser = () => dispatch => {
    localStorage.removeItem("userDetails");
    dispatch({ type: USER_LOGOUT });
};

const getUserProfile = (id) => async (dispatch, getState) => {
    dispatch({ type: USER_PROFILE_REQUEST });

    try {
        const { login: { profile } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${profile.token}`
            }
        };

        const { data } = await axios.get(`/api/v1/user/${id}`, config);

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: USER_PROFILE_ERROR,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    }
};

const updateUserProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    try {
        const { login: { profile } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${profile.token}`
            }
        };

        const { data } = await axios.put(`/api/v1/user/profile`, user, config);

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userDetails", JSON.stringify(data));

    } catch (err) {
        dispatch({
            type: USER_UPDATE_PROFILE_ERROR,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    }
};

export { loginUser, logoutUser, registerUser, getUserProfile, updateUserProfile }
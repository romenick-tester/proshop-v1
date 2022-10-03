import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR
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

        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data
        // });

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
}

export { loginUser, logoutUser, registerUser }
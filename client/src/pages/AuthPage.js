import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userActions";


const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navTo = useNavigate();

    const { auth } = useSelector(state => state.user);

    useEffect(() => {
        if (auth) {
            navTo("/test/success");
        }
    }, [navTo, auth]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return <form>
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                placeholder="Please enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group mt-3">
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="mt-3" onClick={submitHandler}>submit</button>
    </form>
};

export default AuthPage;
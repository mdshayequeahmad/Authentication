import React, { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLogedIn: false,
    login: (token) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLogedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLogedIn: userIsLogedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
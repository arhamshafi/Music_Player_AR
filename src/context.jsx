import React, { createContext, useState } from 'react';

export const App_context = createContext();

function AppProvider({ children }) {

    let [loginData, setLoginData] = useState({ email: "", password: "" });
    let [sign_up_data, set_signup_data] = useState({ name: "", number: "", email: "", password: "" })

    let onhandle = (e) => {
        let { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    let sing_handle = (e) => {
        let {name , value} = e.target
        set_signup_data({...sign_up_data , [name] : value})
    }

    let login = () => {
        console.log(loginData);
    }

    let Sign_up = () => {
        console.log(sign_up_data);
        
    }

    return (
        <App_context.Provider value={{ loginData, setLoginData, onhandle, login , sing_handle , sign_up_data , Sign_up }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;

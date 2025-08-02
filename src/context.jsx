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
        let { name, value } = e.target
        set_signup_data({ ...sign_up_data, [name]: value })
    }

    let login = () => {
        if (!loginData.email.trim() || !loginData.password.trim()) {
            alert("Invalid Credentials")
            return
        }
        let users = JSON.parse(localStorage.getItem("new_user") || [])
        let matched_account = users.find((ele) => ele.email === loginData.email)
        if (matched_account) {
            if (matched_account.password === loginData.password) {
                alert(`${matched_account.name} login successfully `)
            }
            else {
                alert("Wrong password ! Try Again")
            }
        }
        else {
            alert("User Not Found")
        }

    }

    let Sign_up = () => {

        if (!sign_up_data.name.trim() || !sign_up_data.email.trim() || !sign_up_data.number.trim() || !sign_up_data.password.trim()) {
            alert(" All Fields Required To Process ")
            return
        }

        let existingUsers = JSON.parse(localStorage.getItem("new_user")) || [];
        let emailexist = existingUsers.find((ele) => ele.email === sign_up_data.email)
        if (emailexist) {
            alert("This Email is Already Exist")
            return
        }
        existingUsers.push(sign_up_data);
        localStorage.setItem("new_user", JSON.stringify(existingUsers));
        set_signup_data({ name: "", email: "", password: "", number: "" })

    }

    return (
        <App_context.Provider value={{ loginData, setLoginData, onhandle, login, sing_handle, sign_up_data, Sign_up }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;

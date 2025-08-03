import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const App_context = createContext();

function AppProvider({ children }) {

    let navigate = useNavigate()
    let [loginData, setLoginData] = useState({ email: "", password: "" });
    let [sign_up_data, set_signup_data] = useState({ name: "", number: "", email: "", password: "" })
    let [refresh, setrefresh] = useState(false)

    const [App_users, setAppUsers] = useState(() => {
        const stored = localStorage.getItem("new_user");
        return stored ? JSON.parse(stored) : [];
    });

    const [crnt_user, setcrnt_user] = useState(() => {
        try {
            const store = localStorage.getItem("crnt_login");
            return store && store !== "undefined" ? JSON.parse(store) : {};
        } catch (err) {
            console.error("Invalid crnt_login JSON:", err);
            return {};
        }
    });


    useEffect(() => {
        const stored = localStorage.getItem("new_user");
        setAppUsers(stored ? JSON.parse(stored) : []);
    }, [refresh]);


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
        let storedUsers = localStorage.getItem("new_user");
        let users = storedUsers ? JSON.parse(storedUsers) : [];
        if (users.length === 0) {
            alert("User Not Found")
            setLoginData({ email: "", password: "" })
            return;
        }
        let matched_account = users.find((ele) => ele.email === loginData.email)
        console.log(matched_account);

        if (matched_account) {
            if (matched_account.password === loginData.password) {
                alert(`${matched_account.name} login successfully `)
                localStorage.setItem("crnt_login", JSON.stringify(matched_account))
                setcrnt_user(matched_account)
                setLoginData({ email: "", password: "" })
                navigate("/web")
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
        localStorage.setItem("crnt_login", JSON.stringify(sign_up_data))
        setcrnt_user(sign_up_data)
        set_signup_data({ name: "", email: "", password: "", number: "" })
        setrefresh(prev => !prev)
        alert("Sign-up Successful")
        navigate("/web")
    }

    return (
        <App_context.Provider value={{ loginData, setLoginData, onhandle, login, sing_handle, sign_up_data, Sign_up, App_users, crnt_user, setcrnt_user }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;

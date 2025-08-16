import React, { createContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { songs, artists } from './data';

export const App_context = createContext();

function AppProvider({ children }) {

    let new_release = [4, 9].map(i => songs[i])
    let allartist = artists
    let navigate = useNavigate()
    let [loginData, setLoginData] = useState({ email: "", password: "" });
    let [sign_up_data, set_signup_data] = useState({ name: "", number: "", email: "", password: "" })
    let [refresh, setrefresh] = useState(false)
    let [side_bar1, setside_bar_1] = useState(false)
    let [side_bar2, setside_bar_2] = useState(false)

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
            toast.info("Please fill all the fields");
            return
        }
        let storedUsers = localStorage.getItem("new_user");
        let users = storedUsers ? JSON.parse(storedUsers) : [];
        if (users.length === 0) {
            toast.error("User Not Found");
            setTimeout(() => {
                setLoginData({ email: "", password: "" })
                navigate("/sign_up")
            }, 1800)
            return;
        }
        let matched_account = users.find((ele) => ele.email === loginData.email)

        if (matched_account) {
            if (matched_account.password === loginData.password) {
                localStorage.setItem("crnt_login", JSON.stringify(matched_account))
                setcrnt_user(matched_account)
                toast.success("Login Successful!");
                setTimeout(() => {
                    setLoginData({ email: "", password: "" })
                    navigate("/web")
                }, 1800)
            }
            else {
                toast.error("Invalid Password");
            }
        }
        else {
            toast.error("User Not Found");

            setTimeout(() => {
                navigate("/sign_up")
            }, 1800);
        }

    }

    let Sign_up = () => {

        if (!sign_up_data.name.trim() || !sign_up_data.email.trim() || !sign_up_data.number.trim() || !sign_up_data.password.trim()) {
            toast.info("Please fill all the fields");
            return
        }

        let existingUsers = JSON.parse(localStorage.getItem("new_user")) || [];
        let emailexist = existingUsers.find((ele) => ele.email === sign_up_data.email)
        if (emailexist) {
            toast.error("This Email is Already Exist");
            return
        }
        existingUsers.push(sign_up_data);
        localStorage.setItem("new_user", JSON.stringify(existingUsers));
        localStorage.setItem("crnt_login", JSON.stringify(sign_up_data))
        setcrnt_user(sign_up_data)
        setrefresh(prev => !prev)
        toast.success("Sign_up Successful!");

        setTimeout(() => {
            set_signup_data({ name: "", email: "", password: "", number: "" })
            navigate("/web")
        }, 1800)
    }

    ///////////////////////////////////
    let [currentTrack, setCurrentTrack] = useState(null)
    let [isplaying, setisplaying] = useState(false)
    let [active_playlist, set_play_list] = useState([])
    let [crnt_index, set_crnt_index] = useState(null)
    let [crnt_time, setcrnt_time] = useState(0)
    let [duration, setduration] = useState(0)
    let audio = useRef(new Audio())

    let handle_track = (track, index, play_List) => {
        set_play_list(play_List)
        set_crnt_index(index)
        setCurrentTrack(track)
        setisplaying(true)
    }

    useEffect(() => {
        if (currentTrack) {
            audio.current.src = currentTrack.audio
            if (isplaying) {
                audio.current.play()
            }
        }
    }, [currentTrack])

    let togglePlay = (ele) => {
        if (!currentTrack) return

        // new song k liye
        if (ele.id !== currentTrack.id) {
            setisplaying(true)
            return
        }

        // same song ka toogle 
        if (isplaying) {
            audio.current.pause()
            setisplaying(false)
        } else {
            audio.current.play()
            setisplaying(true)
        }
    };
    let play_next = () => {
        let next = (crnt_index + 1) % active_playlist.length
        set_crnt_index(next)
        setCurrentTrack(active_playlist[next])
        setisplaying(true)
    }
    let play_prev = () => {
        let prev = (crnt_index - 1 + active_playlist.length) % active_playlist.length
        set_crnt_index(prev)
        setCurrentTrack(active_playlist[prev])
        setisplaying(true)
    }

    useEffect(() => {

        let music = audio.current

        music.onloadeddata = () => {
            setduration(music.duration)
        }
        music.ontimeupdate = () => {
            setcrnt_time(music.currentTime)
        }
        audio.current.onended = () => {
            if (active_playlist.length === 0) return;
            let nextIndex = (crnt_index + 1) % active_playlist.length;
            set_crnt_index(nextIndex);
            setCurrentTrack(active_playlist[nextIndex]);
            setisplaying(true);
        };
    }, [crnt_index, active_playlist])

    function formatTime(time) {
        if (isNaN(time)) return "00:00";
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    return (
        <App_context.Provider value={{
            loginData, setLoginData, onhandle, login, sing_handle, sign_up_data, Sign_up, App_users, crnt_user, setcrnt_user,
            side_bar1, setside_bar_1, side_bar2, setside_bar_2, new_release, isplaying, setisplaying, handle_track, currentTrack,
            setCurrentTrack, allartist, crnt_time, setcrnt_time, duration, audio, formatTime, togglePlay, play_next, play_prev
        }}>
            {children}
        </App_context.Provider>
    );
}

export default AppProvider;

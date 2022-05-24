import { createContext, useState } from "react";
import AuthService from "./FakeAuth";

export const AuthContext = createContext();

const fakeAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = AuthService.login(username, password)

            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
        }, 1500);
    });
}


const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (username, password) => {

        return new Promise((resolve, reject) => {
            fakeAuth(username, password)
                .then((u) => {
                    setUser(u)
                    resolve(u)
                })
        })
    }

    const logout = () => {
        setUser(null);
    }

    const value = { user, login, logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider

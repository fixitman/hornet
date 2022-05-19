import { createContext, useState } from "react";




export const AuthContext = createContext();

const fakeAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username.concat('1') === password) {
                resolve({ id: 1, displayName: username })
            } else {
                resolve(null)
            }
        }, 1500);
    });
}


const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (username, password) => {
        
        return new Promise((resolve,reject)=>{
            fakeAuth(username, password)
                .then((u) => {
                    setUser({ id: u.id, displayName: u.displayName });
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

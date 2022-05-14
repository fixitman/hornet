import { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = () => {
        setUser({
            id:1,
            displayName:"Mike"
        });
    }

    const logout = () => {
        setUser(null);
    }

    const value = {user, login, logout}

    return ( 
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
     );
}


 
export default AuthContextProvider

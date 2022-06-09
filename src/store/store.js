import { createStore, action, thunk } from 'easy-peasy'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase';


const model = {
    auth: {
        user: null,
        setUser: action((state, user) => {
            state.user = user;
        }),
        login: thunk(async (actions, payload) => {            
            return signInWithEmailAndPassword(auth, payload.email, payload.password)
                .then((response) => {
                    actions.setUser(response.user);
                    return (response.user);
                })
                .catch(() => {
                    return null;
                })


        }),
        logout: thunk(async (actions) => {
            return signOut(auth)
                .then(() => {
                    actions.setUser(null);
                })
        })
    }
}


export const store = createStore(model)
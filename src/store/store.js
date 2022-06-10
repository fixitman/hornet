import { createStore, action, thunk } from 'easy-peasy'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, browserLocalPersistence,
    browserSessionPersistence, setPersistence } from 'firebase/auth'



const model = {
    auth: {
        user: null,

        setUser: action((state, user) => {
            state.user = user;
        }),

        subscribeToAuthChanges: thunk((actions)=>{
            return onAuthStateChanged(auth, (user)=>{
                actions.setUser(user);
            })
        }),
        
        login: thunk(async (actions, payload) => {            
            return signInWithEmailAndPassword(auth, payload.email, payload.password)
                .then((response) => {
                    if(response.user){
                        let persistence = payload.rememberMe? browserLocalPersistence : browserSessionPersistence;
                        setPersistence(auth,persistence)
                        return response.user
                    }
                })
                .catch((error) => {
                    console.log(error)
                    return null;
                })
        }),

        logout: thunk(async (actions) => {
            return signOut(auth)                
        })

    }
}


export const store = createStore(model)
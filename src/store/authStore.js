import { createStore, action} from 'easy-peasy'


const model = {
    user : null,
    setUser: action((state,u)=>{
        state.user = u;
    })
}


export const authStore = createStore(model)
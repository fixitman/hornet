import { createStore, action, thunk} from 'easy-peasy'
import AuthService from '../contexts/FakeAuth'


const model = {
    user : null,
    setUser: action((state,user)=>{
        state.user = user;
    }),
    login: thunk(async (actions,payload)=>{
        const user = await AuthService.login(payload.email, payload.password);
        actions.setUser(user);
        return user;
    }),
    logout: thunk(async(actions) => {
      setTimeout(() => {
          actions.setUser(null);
      },1200);
    })
}


export const authStore = createStore(model)
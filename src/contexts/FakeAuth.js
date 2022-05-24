import Data from '../data'

const  FakeAuth = {
    login: async (username,password) =>{
        const auth = Data.auth.users;
        let match = auth.filter((u) => u.email === username && u.password === password)
        if(match.length > 0) 
            return match[0]

        return null;
    }
}
 
export default FakeAuth  ;
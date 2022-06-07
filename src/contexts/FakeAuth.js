import Data from '../data'

const FakeAuth = {
    login: (username, password) => {
        const auth = Data.auth.users;

        return new Promise((resolve) => {
            setTimeout(() => {
                let match = auth.find((u) => u.email === username && u.password === password)
                if (match)
                    resolve(match)
                else
                    resolve(null)
            }, 100)
        })
    }
}

export default FakeAuth;
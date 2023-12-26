import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'

class Auth {
    #auth
    constructor(app) {
        this.#auth = getAuth(app)
    }

    async register(email, password) {
        try {
            let response = await createUserWithEmailAndPassword(this.#auth, email, password)
            return response.user
        } catch (e) {
            console.log(e.message)
            return false
        }
    }

    async signIn(email, password) {
        try {
            let response = await signInWithEmailAndPassword(this.#auth, email, password)
            return response.user
        } catch (e) {
            console.log(e.message)
            return false
        }
    }

    async signOut() {
        try {
            await signOut(this.#auth)
            return true
        } catch (e) {
            console.log(e.message)
            return false
        }
    }

    onChange(authed, unauthed) {
        onAuthStateChanged(this.#auth, (user) => {
            if (user) {
                if (typeof authed == 'function') {
                    authed(user)
                }
            } else {
                if (typeof unauthed == 'function') {
                    unauthed(user)
                }
            }
        })
    }
}

export { Auth }
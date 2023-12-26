class UID {
    static #key = 'todo_uid';

    static read() {
        return localStorage.getItem(this.#key)
    }

    static write(uid) {
        localStorage.setItem(this.#key, uid)
    }

    static clear() {
        localStorage.removeItem(this.#key)
    }
}

export { UID }
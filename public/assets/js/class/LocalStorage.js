class LocalStorage {
    #uid;

    constructor(uid) {
        this.#uid = uid
    }

    write(key, value) {
        let reader = this.#reader()
        reader[key] = value
        reader = JSON.stringify(reader)
        localStorage.setItem(this.#uid, reader)
    }

    read(key, def = {}) {
        let reader = this.#reader()
        if (reader[key]) {
            return reader[key]
        }
        return def
    }

    clear() {
        localStorage.removeItem(this.#uid)
    }

    #reader() {
        let reader = localStorage.getItem(this.#uid)
        if (!reader) {
            return {}
        }
        return JSON.parse(reader)
    }
}

export { LocalStorage }
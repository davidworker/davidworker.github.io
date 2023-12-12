class LocalStorage {
    #uid;

    constructor(uid) {
        this.#uid = uid
        console.log(this.#uid);
    }

    sayHello() {
        console.log(`Hi, ${this.#uid}`);
    }
}
class TODO_API {
    static update(uid, data = []) {

    }

    static async get(uid) {
        let api = `https://book.niceinfos.com/frontend/api/?action=todo&uid=${uid}`
        let response = await fetch(api);
        let json = await response.json();
        return json.data;

        // fetch(api).then(response => {
        //     return response.json()
        // }).then(json => {
        //     return json;
        // })

    }
}

export { TODO_API }
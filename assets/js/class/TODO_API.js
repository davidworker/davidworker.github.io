class TODO_API {
    static async update(uid, data = []) {
        let api = 'https://book.niceinfos.com/frontend/api/';

        let params = {
            action: 'todo',
            uid: uid,
            data: data
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(params)
        }

        let response = await fetch(api, options)
        let json = await response.json();
        return json.data;
    }

    static async get(uid) {
        let api = `https://book.niceinfos.com/frontend/api/?action=todo&uid=${uid}`
        let response = await fetch(api);
        let json = await response.json();
        return json.data;

        // let text = await response.text();
        // try {
        //     return JSON.parse(text);
        // } catch (e) {
        //     return {};
        // }

        // fetch(api).then(response => {
        //     return response.json()
        // }).then(json => {
        //     return json;
        // })

    }
}

export { TODO_API }
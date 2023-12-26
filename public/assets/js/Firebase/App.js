import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'

class App {
    static async init(config = {}) {
        if (!config || !config.apiKey) {
            config = await this.loadJson()
        }
        return initializeApp(config)
    }

    static async loadJson() {
        let response = await fetch(import.meta.url + '/../config.json')
        let text = await response.text()
        if (text) {
            return JSON.parse(text)
        }
        return {}
    }
}

export { App }
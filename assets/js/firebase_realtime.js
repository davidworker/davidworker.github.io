import { App } from './Firebase/App.js'
import { Database } from './Firebase/Database.js'

const app = await App.init();
const database = new Database(app);

// database.write('david', { name: 'David Lin', age: 18, items: [1, 2, 3, 4, 5] })

// let response = await database.read('david');
// console.log(response);

const onChange = (data) => {
    console.log(data);
}

database.listen('david', onChange);


database.insert('test', 'aaaa');
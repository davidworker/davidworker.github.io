// alert('Alert from js_base.js'); 
// let name = 'David Lin'

// console.log(name)
// console.log('name')
// console.table(name + 'AAAA');

// let nums = [1, 4, 6, 8, 9];
// console.log(nums);
// console.table(nums);

// console.log('%c鴨沒肉！！！\n%c我只是亂喊一下啦~', 'color:red;font-size:20px;', 'color:#00ff00')


let firstName = 'Lin';
let lastName = 'David';
let fullName = firstName + ' ' + 'GGGGG ' + lastName

console.log(fullName);


let n1 = 1
let n2 = 1.25
let n3 = n1 + n2

console.log(n1, n2, n3);

var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    r = x
    y = ''
    while (r > 0) {
        y += r % 10
        r = Math.floor(r / 10)
    }

    return x == y
}

let n = 1
let s = '10'
let ns = n + s

console.log(typeof n, typeof s, typeof ns);

function add(num1, num2) {
    // num1 = parseInt(num1, 10);
    // num2 = parseInt(num2, 10);
    num1 = +num1;
    num2 = +num2;

    let total = num1 + num2;
    console.log(typeof total)
    return total;
}

console.log(add(1, 1));
console.log(add('1', 1));


let students = [1, 2, 3, 4]
console.table(students)

students.push(5);
console.table(students)

students.unshift('FFF');
console.table(students)

console.table(students.join(','));

let index = students.indexOf('FFF');
console.log(index);

students.splice(2, 1)
console.table(students)


let person = {
    name: 'David Lin',
    age: 18
}

console.table(person);

person.name = 'John';
console.table(person);

add = 100
// console.log(add(1, 10));

let bbb = function () {
    return 'bbb'
}

console.log(bbb());
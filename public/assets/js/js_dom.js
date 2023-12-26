let uid = document.querySelector('#uid');
let student = document.querySelector('.student');

console.log(uid);

uid.innerHTML = 'New UID';

console.log(student);

let uids = document.querySelectorAll('#uid');
let students = document.querySelectorAll('.student');
console.log(uids);
console.log(students);


let fullName = document.querySelector('#full-name');

console.log(fullName);

let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    alert('Click Me!!!!!!!!');
})
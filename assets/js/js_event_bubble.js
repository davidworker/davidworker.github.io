// let menuItems = document.querySelectorAll('#menu li')

// menuItems.forEach((li) => {
//     li.addEventListener('click', (e) => {
//         console.log(li.innerHTML)
//     })
// })

let addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', (e) => {
    let menu = document.querySelector('#menu')
    let li = document.createElement('li')
    li.innerHTML = 'new li'

    menu.appendChild(li)
})

let elMenu = document.querySelector('#menu');

elMenu.addEventListener('click', (e) => {
    let el = e.target;
    if (el.tagName.toString().toUpperCase() == 'LI') {
        console.log(el.innerHTML);
    }
});
let elAccount = document.querySelector("#account");
console.log(elAccount);

elAccount.addEventListener('change', (e) => {
    let value = elAccount.value;
    if (value.length < 8) {
        alert('帳號長度不可小於 8 碼');
    }


    console.log(value, value.length);
})

// elAccount.addEventListener('blur', (e) => {
//     console.log('account is blur.')
// })
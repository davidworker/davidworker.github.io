let elAccount = document.querySelector("#account");
console.log(elAccount);

elAccount.addEventListener('change', (e) => {
    let value = elAccount.value;
    // if (value.length < 8) {
    //     alert('帳號長度不可小於 8 碼');
    // }


    // console.log(value, value.length);
})

// elAccount.addEventListener('blur', (e) => {
//     console.log('account is blur.')
// })


elAccount.addEventListener('keypress', (e) => {
    console.log('account is keypress');
    console.log(elAccount.value);
});

elAccount.addEventListener('keyup', (e) => {
    // 用於檢查規則
    console.log('account is keyup');
    console.log(e);
    console.log(`you press ${e.key}`);
    console.log(elAccount.value);
});

let elLoginForm = document.querySelector('#login-form');

elLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = elAccount.value;
    if (value.length < 8) {
        alert('帳號長度不可小於 8 碼');
        return;
    }
    alert('我要送出了喔');
    elLoginForm.submit();
})
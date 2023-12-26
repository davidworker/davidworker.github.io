let score = [100, 50, 60, 40, 80];

score.forEach((value, index) => {
    console.log(`student ${index + 1}: score is ${value}`);
})

function run_case_2(scope_case2_1) {
    // let scope_case2_1 = 10
    let scope_case2_2 = 20
    scope_case2_1 = 30
    console.log(scope_case2_1, scope_case2_2)
}

let scope_case3_1 = 10;
function run_case_3(scope_case3_1) {
    scope_case3_2 = 20
    scope_case3_1 = 30
    console.log(scope_case3_1, scope_case3_2)
}

run_case_3(scope_case3_1)
console.log(scope_case3_1)
console.log(scope_case3_2)
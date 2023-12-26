let elScore = document.querySelector('#score');
let elBtn = document.querySelector('#calc-btn');
let elResponse = document.querySelector('#response');

elBtn.addEventListener('click', (e) => {
    let score = elScore.value;
    trans(score);
})

elScore.addEventListener('keyup', (e) => {
    let key = e.key.toString().toUpperCase();
    if (key == 'ENTER') {
        let score = elScore.value;
        trans(score);
    }
});

const trans = (score) => {
    elResponse.innerHTML = transToLevel(score)
}

const transToLevel = (score) => {
    if (score >= 90) {
        return '甲';
    }

    if (score >= 80) {
        return '乙';
    }

    if (score >= 70) {
        return '丙';
    }

    if (score >= 60) {
        return '丁';
    }

    return '不及格';
}

const transToLevelLowToTop = (score) => {
    let level = '不及格';

    if (score >= 60) {
        level = '丁';
    }

    if (score >= 70) {
        level = '丙';
    }

    if (score >= 80) {
        level = '乙';
    }

    if (score >= 90) {
        level = '甲';
    }

    return level;

}

const transToLevelSw = (score) => {
    let num = Math.floor(score / 10);
    let level = '不及格';

    switch (num) {
        case 10:
        case 9:
            level = '甲';
            break;

        case 8:
            level = '乙';
            break;

        case 7:
            level = '丙';
            break;

        case 6:
            level = '丁';
            break;
    }

    return level;
}

const transToLevelHash = (score) => {
    let num = Math.floor(score / 10);

    let hash = {
        10: '甲',
        9: '甲',
        8: '乙',
        7: '丙',
        6: '丁',
    }

    if (hash[num]) {
        return hash[num];
    }

    return '不及格'
}
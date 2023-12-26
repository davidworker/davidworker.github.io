let timer;

const delay = () => {
    console.log(timer);
    clearTimeout(timer);

    timer = setTimeout(() => {
        console.log('run delay.')
    }, 3000)

    console.log(timer);

}



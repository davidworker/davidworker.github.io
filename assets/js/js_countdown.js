const initEnd = () => {
    let end = new Date;
    end.setFullYear(2024);
    end.setMonth(0);
    end.setDate(1);
    end.setHours(0);
    end.setMinutes(0);
    end.setSeconds(0);
    return end;
}

const calc = (end) => {
    let current = new Date().getTime();
    let diff = (end - current) / 1000

    let units = {
        days: 60 * 60 * 24,
        hours: 60 * 60,
        minutes: 60
    }

    let days = Math.floor(diff / units.days)

    diff = diff % units.days;
    let hours = Math.floor(diff / units.hours)

    diff = diff % units.hours;
    let minutes = Math.floor(diff / units.minutes)

    let seconds = Math.floor(diff % units.minutes)

    // hours = hours.toString().padStart(2, '0');
    // minutes = minutes.toString().padStart(2, '0');
    // seconds = seconds.toString().padStart(2, '0');

    if (hours < 10) {
        hours = '0' + hours
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    console.log(days, hours, minutes, seconds);
}

let end = initEnd();
calc(end);

setInterval(() => {
    calc(end);
}, 1000)





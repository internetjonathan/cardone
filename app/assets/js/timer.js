const startingMinutes = 5;

let time = startingMinutes * 60;

//selects all timer elements since it is displayed multiple times
const countDownEl1 = document.querySelectorAll('#hours');
const countDownEl2 = document.querySelectorAll('#minutes');
const countDownEl3 = document.querySelectorAll('#seconds');

countDownEl1.forEach(function () {
    console.log('hello')
})

//updates client every second
myInterval = setInterval(updateCountdown, 1000)

// function to select counter and set new time
function updateCountdown() {

    const hours = '00';
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    //formats numbers to be 2 digit instead of 1
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    //prevents timer going into negatives
    if (minutes >= 0) {
        countDownEl1.forEach(function (el) {
            el.innerHTML = `${hours}`;
        })
        countDownEl2.forEach(function (el) {
            el.innerHTML = `${minutes}`;
        })
        countDownEl3.forEach(function (el) {
            el.innerHTML = `${seconds}`;
        })
        time--
    } else {
        clearInterval(myInterval)
    }
}


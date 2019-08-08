// const timeBody = document.getElementById('timer-1');

// const dayConst = document.querySelector('[data-value="days"]')
// const hoursConst = document.querySelector('[data-value="hours"]')
// const minuteConst = document.querySelector('[data-value="mins"]')
// const secondConst = document.querySelector('[data-value="secs"]')

// const timer = {
//     start() {
      
//         this.timerId = setInterval(() => {
//             const targetDate = new Date('Jul 17, 2020')
//             const startTime = Date.now();
//             const time = targetDate - startTime;
           

//             const day = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//             const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//             const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//             const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

//             updatehoursConst({day, hours, minutes, seconds});
//         }, 1000);
//     },
// };

// timer.start();


// function updatehoursConst({day, hours, minutes, seconds}) {
//     dayConst.textContent = day;
//     hoursConst.textContent = hours;
//     minuteConst.textContent = minutes;
//     secondConst.textContent = seconds;

// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }




class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
        this.timerId = null;
        this.selector = document.querySelector(selector);
        this.start(this.tagetDate);

    }

    start() {
      
        this.timerId = setInterval(() => {
            const startTime = Date.now();
            const time = this.targetDate - startTime;
           

            const day = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            this.updatehoursConst({day, hours, minutes, seconds});
        }, 1000);
    }

    updatehoursConst({day, hours, minutes, seconds}) {
        const dayConst = this.selector.querySelector('[data-value="days"]')
        const hoursConst = this.selector.querySelector('[data-value="hours"]')
        const minuteConst = this.selector.querySelector('[data-value="mins"]')
        const secondConst = this.selector.querySelector('[data-value="secs"]')
        dayConst.textContent = day;
        hoursConst.textContent = hours;
        minuteConst.textContent = minutes;
        secondConst.textContent = seconds;
    
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
  });
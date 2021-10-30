export function renderCalendarDays() {
    for (let i = 1; i <= 31; i++) {
        const dayBlock = document.createElement('div');
        dayBlock.classList.add('calendar__body-day');
        dayBlock.innerHTML = `
        <span>${i}</span>
        <input type="radio" value="${i}" name="day">
        `
        document.querySelector('.calendar__body-days').append(dayBlock)
    }
}
if (document.querySelector('.calendar__body-days')) {
    renderCalendarDays()
}

let date = new Date();
let todayDay = date.getDate();

function setTodayDay(today) {
    $('.calendar__body-day input').each((index, el) => {
        if (today === +el.value) {
            el.closest('.calendar__body-day').classList.add('today')
        }
    })
}
setTodayDay(todayDay)
document.querySelectorAll('.calendar__body-day input').forEach(el => {
    el.addEventListener('change', e => {
        $('.calendar__body-day').removeClass('current')
        el.closest('.calendar__body-day').classList.add('current')
        $('#loan-day').text(el.value)
    })
})
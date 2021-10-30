import { calculation } from './components/calc.js';
import { questionsBlocksOpening } from './components/questions.js';
import { getTenTime } from './components/dateTime.js';
import { maskPhones } from './components/mask.js';
import { renderNotificationPage } from './components/renderPageNotification.js';
import { timer } from './components/timer.js';
import { changePassport, changeLiveAdress } from './components/anketa.js';
import { showPopup, closePopup } from './components/popups.js';
import { scrollInit } from './components/scrollbar.js';
import { renderCalendarDays } from './components/calendar.js';
import { smsCode } from './components/sms-code.js';
import { costumnCalendar } from './components/costumn-calendar.js'

// import { order_credit, select_payment_send } from './components/credit.js'

calculation();
questionsBlocksOpening();
getTenTime();
maskPhones();
scrollInit();

renderNotificationPage('img/icon/happy-boy.svg', 'Попередня заявка вже схвалена!', `Твоя заявка від 27.09.2021 на 20000 грн вже схвалена. Тож можеш переходити до оформлення кредиту.`, `Оформити кредит`);

if ($(".loading__timer")) {
    let seconds = 30;
    timer(seconds, $("#anketa-timer"), null)
}
$('.typePassport').on('click', function () {
    changePassport($(this))
});

$('#adress-switch').on('change', function () {
    changeLiveAdress($(this))
});

$('[data-popup]').on('click', function () {
    let el = $(this).attr('data-popup')
    showPopup(el)
});
$('.js-close-popup').on('click', function () {
    closePopup()
});
document.addEventListener('click', e => {
    if (e.target.className === 'popups__inner') {
        closePopup()
    }
});
showPopup('#info-popup')
// smsCode()
// showPopup('#sms-code-popup')
// showPopup('#photo-popup')
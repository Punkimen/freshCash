export const renderNotificationPage = (imgSrc, title, text, btnText) => {
    const anketaNotification = $('#anketa-notification');
    const innerNotification = document.createElement('div');
    innerNotification.className = 'anketa__inner-notification anketa-notification';

    innerNotification.innerHTML = `
    <div class="anketa__inner-notification anketa-notification">
        <div class="anketa-notification__face">
            <img src="${imgSrc}" alt="">
        </div>
        <div class="anketa-notification__title anketa-title">
            ${title}
        </div>
        <div class="anketa-notification__text anketa__text">
            ${text}
        </div>
    </div>
    <div class="anketa-form__btns">
        <a href="#" class="anketa-form__btn btn">${btnText}</a>
    </div>
    `

    anketaNotification.append(innerNotification)
}
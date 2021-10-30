function progressView() {
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if (box.dataset.percent >= 50) {
            box.classList.add('over_50');
        } else {
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
    });
}
progressView();


function changeAside() {
    let windowWidth = $(window).width()
    if (windowWidth < 1200) {
        $('.payment-header__mobile-content').append($('.payment-aside'))
    } else {
        $('.payment__wrapper').prepend($('.payment-aside'))
    }
}
changeAside()
$(window).resize(() => {
    changeAside();
})
document.addEventListener('click', e => {
    if (e.target.closest('.payment-header__mobile-back')) {
        $('.payment-header__mobile').slideToggle()
    }
})
$('#burger').on('click', function () {
    $('.payment-header__mobile').slideToggle()
})
$('.payment-tabs-select__header').on('click', function () {
    $('.payment-tabs-select__body').slideToggle()
})
$('.payment-tabs-select__item').on('click', function () {
    let text = $(this).text();
    $(this).parents('.payment-tabs-select').find('.payment-tabs-select__active').text(text)
    $(this).parents('.payment-tabs-select__body').slideUp();
})

$('.payment-info__tabs-item').on('click', function () {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active')
    $('.payment-item').removeClass('show')
    $('.payment-item').eq(index).addClass('show')
})
$('.payment-tabs-select__item').on('click', function () {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active')
    $('.payment-item').removeClass('show')
    $('.payment-item').eq(index).addClass('show')
})
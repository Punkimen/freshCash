export const questionsBlocksOpening = () => {
    $('.questions-item__header').on('click', function () {
        $(this).parents('.questions-item').toggleClass('active')
        $(this).parents('.questions-item').children('.questions-item__body').slideToggle();
    })
}
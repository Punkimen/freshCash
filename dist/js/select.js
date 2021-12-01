$('.custom-select__body').mCustomScrollbar({
    axis: "y",
});

$('.custom-select__header').on('click', function () {
    $(this).next().slideToggle()
})
$('.custom-select__radio').on('click', function () {
    let value = $(this).val()
    $(this).parents('.custom-select__item').addClass('current').siblings().removeClass('current')
    $('.custom-select__val').text(value)
    $(this).parents('.custom-select').addClass('filed')
    $(this).parents('.custom-select__body').slideToggle()
    // $(this).parents()
})
export const changePassport = (el) => {
    if (el.is('#radio_passport')) {
        $('.passport__inner').show()
        $('.idCard__inner').hide()
    } else {
        $('.passport__inner').hide()
        $('.idCard__inner').show()
    }
}
export const changeLiveAdress = (el) => {
    let statusCheck = $(el).prop('checked')
    if (statusCheck === true) {
        $('.adress-inputs').hide()
        $(el).parents('.control-checkbox--adress').removeClass('mb')
    } else {
        $('.adress-inputs').show()
        $(el).parents('.control-checkbox--adress').addClass('mb')
    }
}
$('[data-attention]').on('change', function () {
    let el = $(this).attr('data-attention')
    $(el).toggleClass('show')
})
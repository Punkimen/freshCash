export function showPopup(el) {
    $('.popups').show();
    $(el).addClass('show');
}
export function closePopup() {
    $('.popups').hide();
    $('.popups').removeClass('show');
}
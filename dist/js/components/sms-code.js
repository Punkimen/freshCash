import { timer } from "./timer.js";

export function smsCode() {
    if ($('#sms-code-timer')) {
        let seconds = 5;
        let showRepeatBlock = () => {
            $('#repeat-code').css({
                display: 'block'
            });
            $('#sms-code-loading').hide();
        }
        timer(seconds, $('#sms-code-timer'), showRepeatBlock);
    }
}
$('#repeat-code').on('click', function () {
    $(this).hide();
    $('#sms-code-loading').show();
    smsCode()
})

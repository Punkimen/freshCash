
function select_payment_send() {
    Swal.fire({
        customClass: {
            image: 'preload-icon',
        },
        position: 'top-center',
        imageUrl: '/static/unex/img/icon/waiting.svg',
        title: 'Трохи терпіння',
        text: 'Перевіряємо інформацію',
        showConfirmButton: false,
    })
}

function order_credit(url, valid = false) {
    url = url + "?credit_term=12&credit_sum=" + $input.val()
    if (valid) {

        window.location = url

    } else {
        appData.next_url = url
        show_full_login_wiget()
    }
}

export { order_credit, select_payment_send }
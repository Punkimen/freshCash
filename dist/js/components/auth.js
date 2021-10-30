var appData = {};

const swal_log = Swal.mixin({
    title: '',
    text: '',
    showCancelButton: false,
    showConfirmButton: false,

});

const swal_msg = Swal.mixin({
    title: '',
    text: '',
    showCancelButton: false,
    showConfirmButton: false,

});

if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;

        navigator.credentials.get({
            otp: { transport: ['sms'] },
        }).then(otp => {
            input.value = otp.code;
        }).catch(err => {
            console.log(err);
        });
    });
}

function check_auth(next_url = '', is_auth) {
    if (is_auth) {
        window.location = next_url
    } else {
        appData.next_url = next_url
        show_full_login_wiget()
    }

}
function login_full() {
    url = '/auth/full_login/';
    tel_val = $('#phone').val();
    appData.phone = tel_val;
    var form_data = new FormData();
    form_data.append('csrfmiddlewaretoken', window.CSRF_TOKEN);
    form_data.append('phone', tel_val);

    $.ajax({
        url: url,
        type: 'POST',
        data: form_data,

        success: function (data) {
            appData.token_html = data;
            swal_log.close()
            swal_log.fire({
                title: '',
                text: '',
                html: appData.token_html,
                showCancelButton: false,
                showConfirmButton: false,

            });

        },
        error: function (data) {
            // error_processing(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });

}

function login_full_code_sand() {
    url = 'auth/api/login/' + appData.phone + '/';
    password = $('#token').val()

    let form_data = new FormData()
    form_data.append('csrfmiddlewaretoken', window.CSRF_TOKEN)
    form_data.append('token', password)

    $.ajax({
        url: url,
        type: 'POST',
        data: form_data,

        success: function (data) {
            console.log(data);
            swal_log.close()
            if (data.status === "ok") {
                swal_msg.fire({
                    title: "Логин",
                    text: data.msg,
                    timer: 1000,
                    icon: 'success',
                    iconColor: '#8be835',

                    willClose: () => {
                        window.location = appData.next_url
                    },
                    showCancelButton: false,
                    showConfirmButton: false,

                })
            } else {
                if (data.status === "error") {

                    swal_msg.fire({
                        title: "Логин",
                        text: data.msg,
                        icon: 'error',
                        iconColor: '#db1919',
                        timer: 1000,
                        showCancelButton: false,
                        showConfirmButton: false,
                        willClose: () => {
                            swal_log.fire({
                                title: '',
                                text: '',
                                html: appData.token_html,
                                showCancelButton: false,
                                showConfirmButton: false,

                            });
                        },
                    })

                }

            }

        },
        error: function (data) {
            // error_processing(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });


}

function show_full_login_wiget() {
    $.ajax({
        url: '/auth/full_login/',
        type: 'GET',
        async: false,
        success: function (data) {
            swal_log.close()
            appData.phone_html = data;
            swal_log.fire({
                title: '',
                text: '',
                html: appData.phone_html,
                showCancelButton: false,
                showConfirmButton: false,

            });


        },
        error: function (data) {
            // error_processing(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });
}


import { appData, swal_log, swal_msg } from './auth.js';

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


};

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
};

export { show_full_login_wiget, login_full_code_sand };
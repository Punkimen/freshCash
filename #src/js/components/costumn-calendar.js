export function costumnCalendar() {
    $('.input-costumn-date').on('click', function () {
        $(this).parents('.costumn-calendar').find('.costumn-calendar__body').slideToggle();
    })

    let mounth = 'Січень';
    let year = 0;
    let day = 1;

    function renderMounth() {
        let mounths = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        mounths.forEach((el, index) => {
            let option = document.createElement('option')
            option.value = el
            option.innerHTML = `${el}`
            $('.costumn-calendar__month-select').append(option)
        })
    }
    function renderYears() {
        let date = new Date();
        let currentYear = date.getFullYear()
        let startYear = currentYear - 64;
        let lastYear = currentYear - 18;
        let allYars = []
        for (startYear; startYear <= currentYear && startYear < lastYear; startYear++) {
            allYars.push(startYear);
        }
        $('.costumn-calendar__year-select').val()
        year = allYars[0]

        allYars.forEach((el, index) => {
            let option = document.createElement('option')
            option.value = el
            option.innerHTML = `${el}`
            $('.costumn-calendar__year-select').append(option)
        })
    }

    if ($(this).find('.costumn-calendar__month-select')) {
        renderMounth()
    }
    if ($(this).find('.costumn-calendar__year-select')) {
        renderYears()
    }

    $('.calendar__body-day input').on('change', function () {
        day = +$(this).val()
    })

    $('.costumn-calendar__month-select').on('change', function () {
        mounth = $(this).val()
    })
    $('.costumn-calendar__year-select').on('change', function () {
        year = +$(this).val()
    })
    $('.set-date-btn').on('click', function () {
        console.log(mounth, year, day);
        let inp = $(this).parents('.costumn-calendar').find('.input-costumn-date')
        inp.addClass('filed')
        let date = `${day} ${mounth} ${year}`
        inp.val(date);
        $('.costumn-calendar__body').slideUp()
    })

    $('.costumn-calendar__month').on('change', function () { })
    $('.costumn-calendar__year').on('change', function () { })
}
costumnCalendar()
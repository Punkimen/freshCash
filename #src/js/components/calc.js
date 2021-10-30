export const calculation = () => {
    let $input = $("#calculation-summ");


    $('#calculation-range-summ').ionRangeSlider({
        min: appData.creditMin,
        max: appData.creditMax,
        step: appData.creditStep,
        onStart: function (data) {
            $input.prop("value", `${data.from} грн`);
        },
        onChange: function (data) {
            $input.prop("value", `${data.from} грн`);
        },
        hide_min_max: true,
        hide_from_to: true,
    })
}

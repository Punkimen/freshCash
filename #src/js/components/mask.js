export const maskPhones = () => {
    $.jMaskGlobals.translation["d"] = $.jMaskGlobals.translation["0"];
    delete $.jMaskGlobals.translation["0"];
    $('.input-phone').mask('+38 (0ZZ) ZZZ-ZZ-ZZ', {
        nonInput: [0],
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            },
        },
    });
    $('.input-ipn').mask(`dddddddddd`);
    $('.input-code').mask(`dddd`);
    $('.input-costumn-date').mask(`dd.dd.dddd`);
}

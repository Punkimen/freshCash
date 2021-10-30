export const getTenTime = () => {
    var dateForCredit = new Date();
    let hours = dateForCredit.getHours()
    let minuts = (dateForCredit.getMinutes());
    let time
    let minutsStr = ``;
    if (minuts >= 50) {
        hours++
        minuts = minuts - 60;

        time = (hours < 10 ? '0' + hours : hours) + ":" + ((minuts + 10) < 10 ? "0" + (minuts + 10) : (minuts + 10))
    }
    time = (hours < 10 ? '0' + hours : hours) + ":" + ((minuts + 10) < 10 ? "0" + (minuts + 10) : (minuts + 10))
    $('#ten-minuts-time').text(time)
};

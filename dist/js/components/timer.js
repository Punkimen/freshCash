export const timer = (seconds, el, cb) => {
    let sec = seconds;
    let h, m, s, t;
    function countDown() {
        if (sec > 0) {
            sec--;
            h = sec / 3600 ^ 0,
                m = (sec - h * 3600) / 60 ^ 0,
                s = sec - h * 3600 - m * 60,
                t = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
            el.text(t);
        } else {
            cb()
            return false
        }
        setTimeout(function () {
            countDown();
        }, 1000);
    }
    countDown()
}
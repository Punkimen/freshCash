const video = document.querySelector('#video');

const instructionsForMan = [
    { "text": "Улыбнитесь" },
    { "text": "Тепер слідкуй за вказівками" },
    { "text": "Посміхайся! Будь як супер-зірка!" },
    { "text": "Так тримати! Давай ще!" },
    { "text": "Поверни голову ліворуч" },
    { "text": "Покажи кулак" },
    { "text": "А тепер покажи долоню" },
    { "text": "Покажи два пальця" },
    { "text": "Розплющ очі" },
];

if (video) {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    const photo = document.querySelector('.your-photo')
    const photoBtnSnap = document.querySelector("#snap")
    const startVerification = document.querySelector("#start-verification")

    function closePopup() {
        $('.popups').hide();
        $('.popups').removeClass('show');
    }
    $('.photo-do__btn').on('click', function () {
        let title = $(this).attr('data-popup-title')
        let text = $(this).attr('data-popup-text')
        $('#photo-popup .popup-photo__title').text(title)
        $('#photo-popup .popup-photo__descr--changed').text(text)

        photo.setAttribute('src', '')
        $('#save-snap').hide();
        $('#snap').show();
        $('.your-photo').hide()
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                video.srcObject = stream;
                video.play();
            });
        }

    })
    if (photoBtnSnap) {
        photoBtnSnap.addEventListener("click", function () {
            if (photoBtnSnap.getAttribute('data-photo') === 'do') {
                context.drawImage(video, 0, 0, 430, 263);
                photo.setAttribute('src', canvas.toDataURL('image/png'));
                $('#save-snap').css({
                    display: 'block'
                });
                $('.your-photo').show()
                $('#snap').hide();

            } else {

                photo.style.display = 'none'

            }
        });
    }
    $('#save-snap').on('click', function () {
        let src = $('.your-photo').attr('src')
        $('#photo-for-save').attr('src', src)
        closePopup()
    })

    startVerification.addEventListener('click', function () {
        function changeInstruction(i) {
            if (i < instructionsForMan.length) {
                setInterval(function () {
                    $('.photo-popup__instruction-text').text(instructionsForMan[i].text)
                    i++;
                }, 1000);
            }
        }

        changeInstruction(0);
    })

}
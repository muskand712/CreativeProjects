$(document).ready(function() {
    $("#contactButton").click(function() {
        $("#contactModal").modal('show');
    });
});
$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('#slider .slide');
    const dots = $('.dot');

    function showSlide(index) {
        slides.css('transform', `translateX(${-index * 100}%)`);
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    dots.on('click', function () {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });

    showSlide(currentIndex);

    // Read More button click event
    $(document).on('click', '.slide:hover::after a', function () {
        window.open('https://fylehq.com', '_blank');
    });
});

function changeImage(imageSrc) {
    document.getElementById('project-image').src = imageSrc;
}
$('.card_services').hover(
    function() {
        $(this).find('.content').stop().fadeTo(300, 1); //content dikaho
    },
    function() {
        $(this).find('.content').stop().fadeTo(300, 0); // content hatao
    }
);

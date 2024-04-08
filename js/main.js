(function ($) {
    "use strict";


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

        // Smooth scrolling function
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offset = element.offsetTop; // Get offset from top of the target element
            const duration = 500; // Adjust duration (in milliseconds) as needed for slower scrolling
            const startY = window.pageYOffset; // Get current scroll position
            const distance = offset - startY; // Calculate distance to scroll
            const startTime = performance.now(); // Get current time

            // Animation function
            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const scrollProgress = Math.min(elapsedTime / duration, 1); // Limit progress to max 1
                const easedProgress = ease(scrollProgress); // Apply easing function
                window.scrollTo(0, startY + (distance * easedProgress)); // Scroll based on eased progress
                if (elapsedTime < duration) {
                    requestAnimationFrame(scrollAnimation); // Continue animation until duration is reached
                }
            }

            // Easing function (you can use different easing functions for different scroll effects)
            function ease(t) {
                return t<.5 ? 2*t*t : -1+(4-2*t)*t; // Example of easeInOutQuad easing function
            }

            // Start animation
            requestAnimationFrame(scrollAnimation);
        } else {
            console.error('Target element not found:', target);
        }
    }

    $(document).ready(function() {
    // Attach smooth scrolling to navigation links
    $('.navbar-nav a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        smoothScroll(target);
    });
});

    
})(jQuery);


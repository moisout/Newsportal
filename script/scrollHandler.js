function ScrollHandler() {
    this.didScroll = false;
    this.lastScrollTop = 0;
    this.delta = 5;
    this.headerHeight = $('.header').outerHeight();

    this.initHeaderScroll = function () {
        let me = this;
        $(window).scroll(this.setScrolled);
        setInterval(function () {
            if (me.didScroll) {
                me.handleHeaderScroll();
                me.didScroll = false;
            }
        }, 500);
    }

    this.setScrolled = function () {
        this.didScroll = true;
    }

    this.handleHeaderScroll = function () {
        let me = this;
        let scrollPosition = $('.articles-section').scrollTop();
        console.log('scrollPosition');

        if (Math.abs(this.lastScrollTop - scrollPosition) <= this.delta) {
            return;
        }

        if (scrollPosition > this.lastScrollTop && scrollPosition > this.headerHeight) {
            $('.header').removeClass('nav-down').addClass('nav-up');
        } else {
            $('.header').removeClass('nav-up').addClass('nav-down');
            $('.header').css('top', '');
        }

        this.lastScrollTop = scrollPosition;
    }
}
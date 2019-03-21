function PagesHandler() {
    this.activeTab;

    this.initTabs = function () {
        let me = this;
        $('.tab-line').css('display', 'block');

        $('.category-tab').on('click', function () {
            let tabName = $(this).prop('id');
            me.switchTabs(tabName);
        });

        this.updateTabLine(true);
        let currentTabName = $('.active-tab').prop('id');
        let sectionName = currentTabName.slice(4);
        $(`#articles-section-${sectionName}`).removeClass('to-right');

        $('.category-tabs').on('scroll', function () {
            me.updateTabLine(false);
        });
    }

    this.switchTabs = function (tabName) {
        let oldTabName = $('.active-tab').prop('id');
        $('.active-tab').removeClass('active-tab');
        $(`#${tabName}`).addClass('active-tab');
        this.updateTabLine(true);

        let sectionName = tabName.slice(4);
        let oldSectionName = oldTabName.slice(4);

        let newTab = $(`#articles-section-${sectionName}`).attr('section-nr');
        let oldTab = $(`#articles-section-${oldSectionName}`).attr('section-nr');
        if (newTab > oldTab) {
            $(`#articles-section-${oldSectionName}`).addClass('to-left');
        } else if (newTab < oldTab) {
            $(`#articles-section-${oldSectionName}`).addClass('to-right');
        }
        $(`#articles-section-${sectionName}`).removeClass('to-left');
        $(`#articles-section-${sectionName}`).removeClass('to-right');
    }

    this.updateTabLine = function (animate) {
        if (animate) {
            $('.tab-line').addClass('animate');
            setTimeout(function () {
                $('.tab-line').removeClass('animate');
            }, 300);
        }
        let tabLinePos = $('.active-tab').offset().left;
        let tabLineWidth = $('.active-tab').outerWidth();
        $('.tab-line').css({
            'left': tabLinePos,
            'width': tabLineWidth
        });
    }
}
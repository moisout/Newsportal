function PagesHandler() {
    this.activeTab;

    this.initTabs = function () {
        let me = this;
        $('.tab-line').css('display', 'block');
        $('.category-tab').on('click', function () {
            let tabName = $(this).prop('id');
            me.switchTabs(tabName);
        });
        this.updateTabLine();
        let tabName = $('.active-tab>p').text();
        $(`#articles-section-${tabName}`).removeClass('to-right');
    }

    this.switchTabs = function (tabName) {
        let oldTabName = $('.active-tab>p').text();
        $('.active-tab').removeClass('active-tab');
        $(`#${tabName}`).addClass('active-tab');
        this.updateTabLine();

        let sectionName = tabName.slice(4);

        let newTab = $(`#articles-section-${sectionName}`).attr('section-nr');
        let oldTab = $(`#articles-section-${oldTabName}`).attr('section-nr');
        console.log(`#articles-section-${oldTabName}`);
        if (newTab > oldTab) {
            $(`#articles-section-${oldTabName}`).addClass('to-left');
        } else if (newTab < oldTab) {
            console.log('as');
            $(`#articles-section-${oldTabName}`).addClass('to-right');
        }
        $(`#articles-section-${sectionName}`).removeClass('to-left');
        $(`#articles-section-${sectionName}`).removeClass('to-right');
    }

    this.updateTabLine = function () {
        let tabLinePos = $('.active-tab').offset().left;
        let tabLineWidth = $('.active-tab').outerWidth();
        $('.tab-line').css({
            'left': tabLinePos,
            'width': tabLineWidth
        });
    }
}
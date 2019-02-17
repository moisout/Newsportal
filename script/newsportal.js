function Newsportal() {
    this.debugUrl = '../../News-API';
    this.prodUrl = 'https://maurice.oeger.li/News-API';
    this.apiUrl;
    this.articleLoader = new ArticleLoader(this);

    this.initHeader = function () {
        $('#nav-expand-icon').click(function () {
            if ($(this).hasClass('open')) {
                $('.nav-btn-container').addClass('closing');
                setTimeout(function () {
                    $('.nav-btn-container').removeClass('open');
                    $('.nav-btn-container').removeClass('closing');
                }, 300);
            } else {
                $('.nav-btn-container').addClass('open');
            }

            $(this).toggleClass('open');
        });
    }

    this.initCategories = function (categories) {
        categories.forEach((element, index) => {
            let tabTemplate = `<div id="tab-${element}" class="category-tab">
            <p class="tab-text">${element}</p></div>`;

            $('.articles-section').append(`<div class="articles-container to-right" id="articles-section-${element}" section-nr="${index}"></div>`);
            $('.category-tabs').append(tabTemplate);

            if (index == 0) {
                console.log($(`#tab-${element}`));
                $(`#tab-${element}`).addClass('active-tab');
            }
        });
    }

    let debug = location.href.includes('localhost');
    if (debug === true) {
        this.apiUrl = this.debugUrl;
        console.warn('Running in debug mode');
    } else {
        this.apiUrl = this.prodUrl;
    }
}
//# sourceURL=newsportal.js
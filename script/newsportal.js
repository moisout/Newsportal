function Newsportal() {
    this.debugUrl = '../../News-API';
    this.prodUrl = 'https://maurice.oeger.li/News-API';
    this.apiUrl = 'https://maurice.oeger.li/News-API';
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

    this.initCategories = function () {
        let me = this;
        $.ajax({
                type: "GET",
                url: `${me.apiUrl}/getCategories.php`,
                dataType: "json",
            })
            .done(function (data) {
                data.forEach((element, index) => {
                    const id = element.categories_id;
                    const name = element.categories_name;
                    const fullName = element.categories_fullName;
                    let tabTemplate = `<div id="tab-${name}" class="category-tab">
                    <p class="tab-text">${fullName}</p></div>`;

                    $('.articles-section').append(`<div class="articles-container to-right" id="articles-section-${name}" section-nr="${index}"></div>`);
                    $('.category-tabs').append(tabTemplate);

                    if (index == 0) {
                        $(`#tab-${name}`).addClass('active-tab');
                    }
                });
            });

    }
}
//# sourceURL=newsportal.js
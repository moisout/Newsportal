function bodyLoaded() {
    let components = [
        'newsportal',
        'articleLoader',
        'scrollHandler'
    ];

    let loadCount = 0;

    components.forEach(element => {
        $.ajax({
            url: `script/${element}.js`,
            crossDomain: true,
            dataType: "script",
        })
            .done(function () {
                loadCount++;

                if (loadCount === components.length) {
                    loadContent();
                }
            });
    });

    async function loadContent() {
        let newsportal = new Newsportal();
        newsportal.loadBookmarks();

        let scrollhandler = new scrollHandler();
        scrollhandler.initHeaderScroll();

        let articleLoader = new ArticleLoader(newsportal);
        await articleLoader.loadDebugArticle();
    
        $('.loading-container').addClass('hidden');

        $('#nav-expand-icon').click(function(){
            if($(this).hasClass('open')){
                $('.nav-btn-container').addClass('closing');
                $('.articles-section').css('padding-top', '');
                setTimeout(function(){
                    $('.nav-btn-container').removeClass('open');
                    $('.nav-btn-container').removeClass('closing');
                }, 300);
            }
            else{
                $('.nav-btn-container').addClass('open');
                $('.articles-section').css('padding-top', '120px');
            }

            $(this).toggleClass('open');
        });
    }
}
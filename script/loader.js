function bodyLoaded() {
    let components = [
        'newsportal',
        'articleLoader'
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

    function loadContent() {
        let newsportal = new Newsportal();

        newsportal.loadBookmarks();

        $('.bookmark-btn').on('click', function () {
            let articleLoader = new ArticleLoader(newsportal);
            articleLoader.loadDebugArticle();
        
            $('.loading-container').addClass('hidden');
        });
    }
}
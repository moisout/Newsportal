function bodyLoaded() {
    let components = [
        'newsportal',
        'articleLoader',
        'scrollHandler',
        'settings'
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
        let settingsHander = new SettingsHandler();
        settingsHander.initSettings();
        settingsHander.loadSettings();

        let newsportal = new Newsportal();
        newsportal.initHeader();

        let scrollhandler = new scrollHandler();
        scrollhandler.initHeaderScroll();

        let articleLoader = new ArticleLoader(newsportal);
        await articleLoader.loadDebugArticle();
    
        $('.loading-container').addClass('hidden');
    }
}
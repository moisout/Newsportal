function bodyLoaded() {
    let components = [
        'newsportal',
        'articleLoader',
        'scrollHandler',
        'settings',
        'pagesHandler'
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

        let categories = [
            'all',
            'digital',
            'schweiz'
        ];

        let newsportal = new Newsportal(settingsHander);
        newsportal.initHeader();
        await newsportal.initCategories(categories);

        let articleLoader = new ArticleLoader(newsportal);
        await new Promise(function (resolve, reject) {
            categories.forEach(async function (element, index) {
                await articleLoader.loadArticles(element);
                if (index === categories.length - 1) {
                    resolve(element);
                }
            })
        })

        let pagesHandler = new PagesHandler();
        pagesHandler.initTabs();

        $('.loading-container').addClass('hidden');
    }
}
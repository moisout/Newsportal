function bodyLoaded() {
    let components = [
        'main',
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
    }
}
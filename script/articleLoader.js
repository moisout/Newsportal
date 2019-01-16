function ArticleLoader(newsportal) {
    this.bookmarks;
    this.newsportal = newsportal;

    this.loadArticle = function (articleTitle, articlePreviewText, articlePageName, articleLink, articleImage) {
            let article = `<div class="article-section">
            <div class="article-title">
                <a href="${articleLink}" target="_blank" class="no-format"><h3>${articleTitle}</h3></a>
            </div>
            <div class="article-image">
                <img src="${articleImage}"></img>
            </div>
            <div class="article-preview-text">
                <p>
                    ${articlePreviewText}
                </p>
            </div>
            <div class="article-page">
                <div class="article-page-name">
                    <p>${articlePageName}</p>
                </div>
                <div class="article-page-image">
                </div>
            </div>
        </div>`;

            $('.articles-section').append(article);
        },

        this.loadDebugArticle = function () {
            let me = this;
            return new Promise(function (resolve, reject) {
                $.ajax({
                        url: `${me.newsportal.apiUrl}/getNewArticles.php`,
                        data: {"url": "http://www.nzz.ch/recent.rss"}
                    })
                    .done(function (data) {
                        let articles = data.channel.item;
                        data.channel.item.forEach((element, index) => {
                            me.loadArticle(articles[index].title, articles[index].description, data.channel.title, articles[index].link, art);
                        });
                        resolve(data);
                    });
            });
        }
}

//# sourceURL=articleLoader.js
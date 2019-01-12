function ArticleLoader(newsportal) {
    this.bookmarks;
    this.newsportal = newsportal;

    this.loadArticle = function(articleTitle, articlePreviewText, articleAuthorName, articlePageName){
        let article = `<div class="article-section">
            <div class="article-title">
                <h3>${articleTitle}</h3>
            </div>
            <div class="article-image"></div>
            <div class="article-preview-text">
                <p>
                    ${articlePreviewText}
                </p>
            </div>
            <div class="article-author">
                <div class="article-author-name">
                    <p>${articleAuthorName}</p>
                </div>
                <div class="article-author-image"></div>
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

    this.loadDebugArticle = function(){
        let me = this;
        $.ajax({
            url: `${me.newsportal.apiUrl}/getDebugArticle.php`
        })
            .done(function (data) {
                me.loadArticle(data.title, data.previewtext, data.author, data.pagename);
            });
    }
}

//# sourceURL=articleLoader.js
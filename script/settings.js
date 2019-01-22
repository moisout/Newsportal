function SettingsHandler() {
    this.settings = {
        sources: [{
                name: "NZZ",
                active: true
            },
            {
                name: "Golem.de",
                active: true
            },
            {
                name: "Blick",
                active: false
            },
            {
                name: "Lineageos",
                active: true
            }
        ],
        theme: 'light-theme'
    };

    this.loadSettings = function () {
        console.log(localStorage['settings']);
        let rawSettings = localStorage['settings'] || false;
        let settings = JSON.parse(rawSettings);

        if (settings === false) {
            console.log('no settings');
            localStorage['settings'] = JSON.stringify(this.settings);
        } else {
            console.log(settings);
            this.settings = JSON.parse(localStorage['settings']);
        }

        $('html').addClass(this.settings.theme);
        $(`.${this.settings.theme}-btn`).addClass('on');
    }

    this.syncSettings = function(){
        localStorage['settings'] = JSON.stringify(this.settings);
    }

    this.initSettings = function(){
        let me = this;
        $('.settings-btn').on('click', function () {
            $('.settings-cover').addClass('opened');
        });

        $('.settings-close-button').on('click', hideSettings);
        $('.settings-cover').on('click', hideSettings).children().click(function (e) {
            return false;
        });

        function hideSettings() {
            $('.settings-cover').addClass('closing');
            $('.settings-container').addClass('closing');
            setTimeout(function(){
                $('.settings-cover').removeClass('opened');
                $('.settings-cover').removeClass('closing');
                $('.settings-container').removeClass('closing');
            }, 300);
        }

        // $('.toggle-btn').on('click', function(){
        //     $(this).toggleClass('on');
        // });

        $('.light-theme-btn').on('click', function(){
            if(me.settings.theme !== 'light-theme'){
                me.settings.theme = 'light-theme';
                $('html').addClass('light-theme');
                $('html').removeClass('dark-theme');
                $(this).addClass('on');
                $('.dark-theme-btn').removeClass('on');
                me.syncSettings();
            }
        });

        $('.dark-theme-btn').on('click', function(){
            if(me.settings.theme !== 'dark-theme'){
                me.settings.theme = 'dark-theme';
                $('html').addClass('dark-theme');
                $('html').removeClass('light-theme');
                $(this).addClass('on');
                $('.light-theme-btn').removeClass('on');
                me.syncSettings();
            }
        });
    }
}
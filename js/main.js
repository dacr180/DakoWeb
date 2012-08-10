window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
    },

    initialize: function () {
         this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
            alert("sd");
        } else {
           alert("s");
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
    },

});

templateLoader.load(["HomeView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });

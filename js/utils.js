// The Template Loader. Used to asynchronously load templates located in separate .html files
window.templateLoader = {

    load: function(views, callback) {
        
        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });
        alert(deferreds[0].goalone);
        $.when.apply(null, deferreds).done(callback); 
  }

};

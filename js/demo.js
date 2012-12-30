var add_keys = function () {
    var items = $("#content").get()[0].getElementsByTagName("*");
    for (var i = items.length; i--;) {
        var element = items[i];
        var text = element.textContent.trim();
        if (text) {
            console.log(text);
            $(element).attr('data-i18n', text);
        }
    }
};
$(document).ready(function(){
    $.i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        addMissing: true
    }, function() {
        add_keys();
        $("#content").i18n();
    });
});

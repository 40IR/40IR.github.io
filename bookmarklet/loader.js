(function() {
    if (window.midnightFactory) {
        window.midnightFactory();
        return;
    }
    var script = document.createElement('script');
    script.src = 'https://40IR.github.io/bookmarklet/midnight.js';
    script.onload = function() {
        if (window.midnightFactory) window.midnightFactory();
    };
    document.body.appendChild(script);
})();

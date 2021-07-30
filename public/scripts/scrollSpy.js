(function () {
    'use strict';

    const section = document.querySelectorAll("section");
    let sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition + 60) {
                document.querySelector('.active').classList.remove('active');
                document.querySelector('a[href*=' + i + ']').classList.add('active');
            }
        }
    };
})();

//Source: https://codepen.io/zchee/pen/ogzvZZ

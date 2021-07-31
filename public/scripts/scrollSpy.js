(function () {
    'use strict';

    var documentHeight = document.documentElement.scrollHeight;
    const section = document.querySelectorAll("section");
    let sections = {};

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let i = 0;

        // Fix for last section
        if(documentHeight === scrollPosition + window.innerHeight)
            scrollPosition = documentHeight;

        for (i in sections) {
            if (sections[i] <= scrollPosition + 60) {
                document.querySelector('.active').classList.remove('active');
                document.querySelector('a[href*=' + i + ']').classList.add('active');
            }
        }
    };
})();

//Source: https://codepen.io/zchee/pen/ogzvZZ

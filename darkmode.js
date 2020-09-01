/**
 * Created Date : Tuesday, September 1st 2020, 3:45:34 pm
 * Author       : Asep Komarudin
 * Email        : aasseepp@gmail.com
 * -----
 * Last Modified: Tue Sep 01 2020
 * Modified By: Asep Komarudin
 * -----
 * Copyright (c) 2020 pojokcode
 * ------------------------------------
 * Javascript will save your soul!
 */


(() => {
    if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
         alert('Your browser does not support the `prefers-color-scheme` media query.');
    }

    const darkModeToggle = document.querySelector('dark-mode-toggle');
    const manifests = document.querySelectorAll('link[rel="manifest"]');
    const favicons = document.querySelectorAll('link[rel="icon"]');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    const toggleTheme = (e) => {
        const darkModeOn = e.detail.colorScheme === 'dark' ? true : false;
        manifests.forEach((link) => {
            link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
        });
        favicons.forEach((link) => {
            link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
        });
        themeColor.content = darkModeOn ? 'black' : 'white';
    };
    document.addEventListener('colorschemechange', toggleTheme);
    toggleTheme({ detail: { colorScheme: darkModeToggle.mode } });
})();

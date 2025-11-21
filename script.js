// Small JS: nav toggle and year
(function () {
    function q(id) { return document.getElementById(id) }
    var nav = document.querySelector('.nav');
    var toggles = document.querySelectorAll('[id^="navToggle"]')
    toggles.forEach(function (btn) {
        btn && btn.addEventListener('click', function () {
            if (nav.style.display === 'flex' || nav.style.display === 'block') {
                nav.style.display = '';
            } else {
                nav.style.display = 'block';
            }
        })
    })
    var years = document.querySelectorAll('[id^="year"]');
    years.forEach(function (el) { el.textContent = new Date().getFullYear() })
})();
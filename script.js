const tombolHamburger = document.getElementById('tombol-hamburger');
const navMenu = document.getElementById('nav-menu');

tombolHamburger.addEventListener('click', function() {
    navMenu.classList.toggle('buka');
});

const semuaLinkNav = document.querySelectorAll('.nav-menu a');
semuaLinkNav.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('buka');
    });
});

const tombolFilter = document.querySelectorAll('.tombol-filter');
const kartuMenu = document.querySelectorAll('.kartu-menu');

tombolFilter.forEach(function(tombol) {
    tombol.addEventListener('click', function() {
        tombolFilter.forEach(t => t.classList.remove('aktif'));
        tombol.classList.add('aktif');

        const kategoriDipilih = tombol.getAttribute('data-filter');

        kartuMenu.forEach(function(kartu) {
            const kategoriKartu = kartu.getAttribute('data-kategori');

            if (kategoriDipilih === 'semua' || kategoriDipilih === kategoriKartu) {
                kartu.classList.remove('sembunyi');
            } else {
                kartu.classList.add('sembunyi');
            }
        });
    });
});
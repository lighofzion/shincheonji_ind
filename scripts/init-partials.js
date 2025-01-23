import partials from './partials.js';

// Load header and footer
document.addEventListener('DOMContentLoaded', async () => {
    await partials.insertHead('/partials/head.html');
    await partials.insert('header-placeholder', '/partials/header.html');
    await partials.insert('footer-placeholder', '/partials/footer.html');
});
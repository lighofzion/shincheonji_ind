
class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener('popstate', this.handleRoute.bind(this));
        this.initLinks();
    }

    initLinks() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.href);
            }
        });
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/404'];
        const content = await fetch(route).then(res => res.text());
        document.getElementById('main-content').innerHTML = content;
    }

    navigate(url) {
        window.history.pushState(null, null, url);
        this.handleRoute();
    }
}

// Initialize router
const router = new Router({
    '/': '/index.html',
    '/about': '/pages/about.html',
    '/404': '/pages/404.html'
});
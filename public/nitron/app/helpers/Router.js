define([], function () {
    'use strict';

    class Router {
        constructor(routes) {
            this.el = null;
            this.routes = routes;

            window.addEventListener('hashchange', () => {
                this.router();
            });
            window.addEventListener('DOMContentLoaded', () => {
                this.router;
            });
        }

        checkRoutes(routes) {
            // TODO Check if all routes are ok (are not repeating and has good callbacks)
        }

        router() {
            var url = location.hash.slice(1) || '/',
                route = this.routes[url];

            if (typeof route != "undefined") {
                route.call();
            } else {
                throw 'No routing';
            }
        }

        navigate(route) {
            this.router(route);
        }
    }
});
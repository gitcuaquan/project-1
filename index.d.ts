import * as bootstrap from 'bootstrap';
declare module '#app' {
    interface NuxtApp {
        bootstrap: typeof bootstrap;
    }
}
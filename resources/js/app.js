import { createInertiaApp } from '@inertiajs/inertia-svelte'
// import './bootstrap';

createInertiaApp({
  resolve: name => import(`./Pages/${name}.svelte`),
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})


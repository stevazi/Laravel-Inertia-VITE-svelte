<script>
    import { inertia } from '@inertiajs/inertia-svelte'
  </script>

  <main>
    <header>
      <a use:inertia href="/">Home</a>
      <a use:inertia href="/about">About</a>
    </header>
    <article>
      <slot />
    </article>
  </main>

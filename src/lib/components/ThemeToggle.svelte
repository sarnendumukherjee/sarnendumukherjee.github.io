<script lang="ts">
  import { theme, toggleTheme } from '../stores/theme';
  import { Sun, Moon } from 'lucide-svelte';
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors duration-300"
  aria-label="Toggle theme"
>
  {#if $theme === 'light'}
    <Sun class="h-6 w-6" />
  {:else}
    <Moon class="h-6 w-6" />
  {/if}
</button>
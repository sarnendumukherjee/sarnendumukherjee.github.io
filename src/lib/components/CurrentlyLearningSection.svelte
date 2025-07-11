<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { currentlyLearning }: { currentlyLearning: string[] } = $props();
</script>

{#if currentlyLearning.length > 0}
  <section id="currently-learning">
    <h2 class="section-heading section-heading-hover">Currently Learning</h2>
    <div class="flex flex-wrap gap-4" use:animateOnScroll={{ stagger: 0.05 }}>
      {#each currentlyLearning as item}
        <span class="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-4 py-2 rounded-full font-semibold">
          {item}
        </span>
      {/each}
    </div>
  </section>
{/if}
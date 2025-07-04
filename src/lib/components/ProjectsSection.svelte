<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { projects }: { projects: ResumeData['projects'] } = $props();
</script>

{#if projects.length > 0}
  <section id="projects" use:animateOnScroll>
    <h2 class="section-heading hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div class="border border-gray-200 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800">
          <h3 class="text-2xl font-bold dark:text-gray-200">{project.name}</h3>
          <p class="mt-2 dark:text-gray-300">{project.description}</p>
          <a href={project.url} class="text-blue-500 hover:underline mt-4 inline-block dark:text-blue-400">View Project</a>
        </div>
      {/each}
    </div>
  </section>
{/if}
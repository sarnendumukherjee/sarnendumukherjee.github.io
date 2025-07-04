<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { experience }: { experience: ResumeData['experience'] } = $props();
</script>

<section id="experience">
  <h2 class="section-heading hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Experience</h2>
  <div class="space-y-8" use:animateOnScroll={{ stagger: 0.1 }}>
    {#each experience as job}
      <div>
        <h3 class="text-2xl font-bold dark:text-gray-200">{job.title}</h3>
        <p class="text-lg font-semibold dark:text-gray-300">{job.company} | {job.period}</p>
        <p class="mt-2 dark:text-gray-400">{job.description}</p>
      </div>
    {/each}
  </div>
</section>
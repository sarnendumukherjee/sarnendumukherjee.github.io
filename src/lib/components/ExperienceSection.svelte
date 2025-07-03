<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { experience }: { experience: ResumeData['experience'] } = $props();
</script>

<section id="experience">
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Experience</h2>
  <div class="space-y-8" use:animateOnScroll={{ stagger: 0.1 }}>
    {#each experience as job}
      <div>
        <h3 class="text-2xl font-bold">{job.title}</h3>
        <p class="text-lg font-semibold">{job.company} | {job.period}</p>
        <p class="mt-2">{job.description}</p>
      </div>
    {/each}
  </div>
</section>
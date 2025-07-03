<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { education }: { education: ResumeData['education'] } = $props();
</script>

<section id="education">
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-6">Education</h2>
  <div class="space-y-8" use:animateOnScroll={{ stagger: 0.1 }}>
    {#each education as edu}
      <div>
        <h3 class="text-2xl font-bold dark:text-gray-200">{edu.degree}</h3>
        <p class="text-lg font-semibold dark:text-gray-300">{edu.institution} | {edu.period}</p>
      </div>
    {/each}
  </div>
</section>
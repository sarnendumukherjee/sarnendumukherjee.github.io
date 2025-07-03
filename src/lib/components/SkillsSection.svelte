<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { skills }: { skills: ResumeData['skills'] } = $props();
</script>

<section id="skills">
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-6">Skills</h2>
  <div class="space-y-8">
    {#each skills as skillGroup}
      <div>
        <h3 class="text-2xl font-semibold mb-4 dark:text-gray-200">{skillGroup.category}</h3>
        <div class="flex flex-wrap gap-4" use:animateOnScroll={{ stagger: 0.05 }}>
          {#each skillGroup.technologies as skill}
            <span class="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-full font-semibold">{skill}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
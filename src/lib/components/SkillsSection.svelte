<script lang="ts">
  import type { ResumeData } from '../../app';
  import SkillProgressBar from './SkillProgressBar.svelte';

  let { skills }: { skills: ResumeData['skills'] } = $props();
</script>

<section id="skills">
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-6">Skills</h2>
  <div class="space-y-8">
    {#each skills as skillGroup}
      <div>
        <h3 class="text-2xl font-semibold mb-4 dark:text-gray-200">{skillGroup.category}</h3>
        <div class="space-y-4">
          {#each skillGroup.technologies as technology}
            <SkillProgressBar skillName={technology.name} proficiency={technology.proficiency} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
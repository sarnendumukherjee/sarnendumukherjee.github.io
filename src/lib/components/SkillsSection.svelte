<script lang="ts">
  import type { ResumeData } from '../../app';
  import SkillProgressBar from './SkillProgressBar.svelte';

  let { skills }: { skills: ResumeData['skills'] } = $props();
</script>

<section id="skills">
  <h2 class="section-heading hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Skills</h2>
  <div class="space-y-8">
    {#each skills as skillGroup}
      {@const filteredTechnologies = skillGroup.technologies.filter(tech => tech.proficiency > 0)}
      {#if filteredTechnologies.length > 0}
        <div>
          <h3 class="text-2xl font-semibold mb-4 dark:text-gray-200">{skillGroup.category}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each filteredTechnologies as technology}
              <SkillProgressBar skillName={technology.name} proficiency={technology.proficiency} />
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>
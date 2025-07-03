<script lang="ts">
  import data from '$lib/data.json';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';
  import EducationSection from '$lib/components/EducationSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<div class="container mx-auto p-8 max-w-4xl">
  <header class="text-center mb-16">
    <h1 class="text-5xl font-bold dark:text-gray-100">{data.name}</h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">{data.title}</p>
  </header>

  <main class="space-y-24">
    <AboutSection aboutText={data.about} />
    <SkillsSection skills={data.skills} />
    <ExperienceSection experience={data.experience} />
    <EducationSection education={data.education} />
    {#if data.projects.length > 0}
      <ProjectsSection projects={data.projects} />
    {/if}
    <ContactSection contact={data.contact} />
  </main>
</div>
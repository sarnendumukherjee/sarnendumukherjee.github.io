<script lang="ts">
  import type { ResumeData } from '../app';
  import data from '$lib/data.json';
  import { animateOnScroll } from '$lib/actions.js';

  const typedData: ResumeData = data;
</script>

<div class="container mx-auto p-8">
  <header class="text-center mb-16">
    <h1 class="text-5xl font-bold">{data.name}</h1>
    <p class="text-xl text-gray-600 mt-2">{data.title}</p>
  </header>

  <main class="space-y-24">
    <section id="about">
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">About Me</h2>
      <p class="text-lg">
        {data.about}
      </p>
    </section>

    <section id="experience">
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Experience</h2>
      <div class="space-y-8" use:animateOnScroll={{ stagger: 0.1 }}>
        {#each data.experience as job}
          <div>
            <h3 class="text-2xl font-bold">{job.title}</h3>
            <p class="text-lg font-semibold">{job.company} | {job.period}</p>
            <p class="mt-2">{job.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section id="education">
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Education</h2>
      <div class="space-y-8" use:animateOnScroll={{ stagger: 0.1 }}>
        {#each data.education as edu}
          <div>
            <h3 class="text-2xl font-bold">{edu.degree}</h3>
            <p class="text-lg font-semibold">{edu.institution} | {edu.period}</p>
          </div>
        {/each}
      </div>
    </section>

    <section id="skills">
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Skills</h2>
      <div class="space-y-8">
        {#each data.skills as skillGroup}
          <div>
            <h3 class="text-2xl font-semibold mb-4">{skillGroup.category}</h3>
            <div class="flex flex-wrap gap-4" use:animateOnScroll={{ stagger: 0.05 }}>
              {#each skillGroup.technologies as skill}
                <span class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </section>

    {#if data.projects.length > 0}
      <section id="projects" use:animateOnScroll>
        <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each typedData.projects as project}
            <div class="border p-6 rounded-lg">
              <h3 class="text-2xl font-bold">{project.name}</h3>
              <p class="mt-2">{project.description}</p>
              <a href={project.url} class="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <section id="contact" use:animateOnScroll>
      <h2 class="text-3xl font-semibold border-b-2 border-gray-200 pb-2 mb-6">Contact</h2>
      <div class="text-center">
        <p class="text-lg">Feel free to reach out!</p>
        <a href="mailto:{data.contact.email}" class="text-xl text-blue-500 hover:underline">{data.contact.email}</a>
        <div class="flex justify-center gap-8 mt-4">
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">LinkedIn</a>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  </main>
</div>

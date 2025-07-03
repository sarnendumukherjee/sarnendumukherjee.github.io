<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';

  let { contact }: { contact: ResumeData['contact'] } = $props();
</script>

<section id="contact" use:animateOnScroll>
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-6">Contact</h2>
  <div class="text-center">
    <p class="text-lg dark:text-gray-300">Feel free to reach out!</p>
    <a href="mailto:{contact.email}" class="text-xl text-blue-500 hover:underline dark:text-blue-400">{contact.email}</a>
    <div class="flex justify-center gap-8 mt-4">
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline dark:text-blue-400">LinkedIn</a>
      <a href={contact.github} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline dark:text-blue-400">GitHub</a>
    </div>
  </div>
</section>
<script lang="ts">
  import type { ResumeData } from '../../app';
  import { animateOnScroll } from '$lib/actions.js';
  import { Linkedin, Github, Copy } from 'lucide-svelte';

  let { contact }: { contact: ResumeData['contact'] } = $props();

  let copied = $state(false);

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(contact.email);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>

<section id="contact" use:animateOnScroll>
  <h2 class="text-3xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-6">Contact</h2>
  <div class="text-center">
    <p class="text-lg dark:text-gray-300">Feel free to reach out!</p>
    <div class="flex items-center justify-center gap-2">
      <a href="mailto:{contact.email}" class="text-xl text-blue-500 hover:underline dark:text-blue-400">{contact.email}</a>
      <button
        onclick={copyEmailToClipboard}
        class="p-1 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors duration-300 cursor-pointer {copied ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}"
        aria-label="Copy email to clipboard"
      >
        <Copy size={20} />
      </button>
    </div>
    <div class="flex justify-center gap-8 mt-4">
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 dark:text-blue-400 hover:scale-110 transition-transform duration-200"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={36} />
      </a>
      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 dark:text-blue-400 hover:scale-110 transition-transform duration-200"
        aria-label="GitHub Profile"
      >
        <Github size={36} />
      </a>
    </div>
  </div>
</section>
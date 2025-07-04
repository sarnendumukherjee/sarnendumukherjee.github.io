<script lang="ts">
  let { aboutText }: { aboutText: string } = $props();
</script>

<section id="about">
  <h2 class="section-heading hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">About Me</h2>
  <p class="text-lg dark:text-gray-300">
    {aboutText}
  </p>
</section>